import StylishCard from "../StylishCard/StylishCard";
import claude from "../../app/assets/png/claude.webp";
import deepseek from "../../app/assets/png/deepseek2.webp";
import chatgpt from "../../app/assets/png/chatgpt2.webp";
import gemini from "../../app/assets/png/gemini.webp";

export const Chatgpt = () => {
  return (
    <StylishCard
      aitoolslogo={chatgpt}
      toolsname="ChatGPT"
      toolsdescription="Most popular AI assistant with GPT-4 capabilities. Great for general tasks and coding."
      toolsfeatureone="GPT-4 & GPT-4 Turbo"
      toolsfeaturetwo="Code interpreter"
      toolsfeaturethree="Web browsing"
      imagestyle="picstyles"
      toollinks="Try ChatGPT"
      navlinks="https://chat.openai.com"
    />
  );
};

export const DeepSeek = () => {
  return (
    <StylishCard
      aitoolslogo={deepseek}
      toolsname="Deepseek"
      toolsdescription="Open source reasoning model. Best for coding math and long context tasks handle."
      toolsfeatureone="1M token context window"
      toolsfeaturetwo="Free & open-source"
      toolsfeaturethree="Strong reasoning & coding"
      toollinks="Try Deepseek"
      navlinks="https://www.deepseek.com/en/"
    />
  );
};

export const Gemini = () => {
  return (
    <StylishCard
      aitoolslogo={gemini}
      toolsname="Gemini"
      toolsdescription="Google’s multimodal AI with real time access to Search YouTube Gmail, and Drive"
      toolsfeatureone="2M token context"
      toolsfeaturetwo="YouTube summarization"
      toolsfeaturethree="Google Workspace plugins"
      toollinks="Try Gemini"
      imagestyle="picstyles"
      navlinks="https://gemini.google.com/app"
    />
  );
};

export const Claude = () => {
  return (
    <StylishCard
      aitoolslogo={claude}
      toolsname="Claude"
      toolsdescription="Thoughtful, conversational AI with strong ethical guardrails. Excellent for creative writing and complex reasoning."
      toolsfeatureone="200K token context"
      toolsfeaturetwo="Computer use capability"
      toolsfeaturethree="Low hallucination rate"
      claudestyle="claudestyle"
      toollinks="Try Claude"
      navlinks="https://claude.ai/onboarding"
    />
  );
};
