import React, { memo, useEffect } from "react";
import OpenAI from "openai";
import axios from "axios";

export default memo(function OpenAi({ reviews, user, JWT, prodID }) {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
    dangerouslyAllowBrowser: true,
  });

  useEffect(() => {
    if (!reviews || reviews.length === 0 || !user || !JWT || !prodID) {
      return;
    }
  
    const fetchSentimentAnalysis = async () => {
      try {
        const result = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "you are a Sentiment analysis",
            },
            {
              role: "user",
              content: `Classify this review: ${reviews[reviews.length - 1].Comment}.
              Sentiment:`,
            },
          ],
          temperature: 0,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });
  
        const sentiment = result?.choices[0]?.message?.content;
  
        if (sentiment === "Negative") {
          const response = await axios.post(
            "https://backend-last-v.onrender.com/comments",
            {
              productID: prodID,
              status: "negative",
              message: reviews[reviews.length - 1].Comment,
              user: user,
            },
            {
              headers: {
                "x-auth-token": JWT,
              },
            }
          );
  
          // console.log("Comment response:", response);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
  
    fetchSentimentAnalysis();

  }, [reviews, user, JWT, prodID, openai.chat.completions]);

  return <div></div>;
});
