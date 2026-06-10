import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../../components/FaqsComp/Faqsection.scss";
import Container from "@mui/material/Container";
import Notegptbg from "../../components/Notegptbg/Notegptbg";

const Faqsection = () => {
  const [activeId, setActiveId] = useState(null);

const data = [
    {
      id: 1,
      title: "Q 1- Is NoteGPT just another ChatGPT wrapper? How is it different ?",
      content: "NoteGPT is built specifically for note taking and content summarization  not general chat. Unlike ChatGPT NoteGPT automatically detects structure headings bullet points key terms generates mind maps extracts action items and exports directly to Notion PDF or Markdown. Think of it as ChatGPT trained only to make your notes better not to answer random questions.",
    },
    {
      id: 2,
      title: "Q 2- Are my notes private? Do you train AI on my data ?",
      content: "Absolutely not. Your notes are never used to train our models. We offer end to end encryption for all Pro users and you can choose a local processing option where your text never leaves your device. Free tier notes are anonymized and deleted after 30 days. We never sell or share your content  ever.",
    },
    {
      id: 3,
      title: "Q 3- What file types and sources can NoteGPT handle?",
      content: "NoteGPT works with  Text paste any text URL or upload .txt .pdf .docx Video YouTube Vimeo Loom links  generates transcript   summary Audio MP3 M4A voice memos  speech to text   summarization Images extract text from screenshots or photos via OCR Live recording record directly in the app during meetings or lectures. All outputs can be exported as Markdown PDF Notion page or plain text.",
    },
    {
      id: 4,
      title: "Q 4- Can I cancel my Pro plan anytime? What happens to my notes ?",
      content: "Yes  cancel anytime from your billing settings with one click. No hidden fees no contracts. If you downgrade to Free your existing notes remain accessible but you lose access to Pro features unlimited mind maps image generation video summaries. Your note history is never deleted unless you choose to delete it yourself.",
    },
    {
      id: 5,
      title: "Q 5- Does NoteGPT work on mobile? Is there an app ?",
      content: "Yes  NoteGPT works in any mobile browser iOS Android Chrome Safari with a fully responsive interface. A native iOS and Android app is currently in beta and will launch in Q3 2026. Mobile features include voice input offline access for Pro users and widget support for quick note capture.",
    },
  ];

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      <section className="faq-section">
        <Container>
          <Notegptbg />
          <div className="faq-container">
            <h2 className="faq-heading">Frequently Asked <span id="question-text">Questions</span></h2>
            {data.map((items) => (
              <div key={items.id} className="faq-item">
                <div
                  className={`faq-title ${activeId === items.id ? "active" : ""}`}
                  onClick={() => toggleItem(items.id)}
                >
                  <h3 className="titles">{items.title}</h3>
                  <span className="faq-icon">
                    {activeId === items.id ? <FaMinus /> : <FaPlus />}
                  </span>
                </div>
                <div
                  className={`faq-content ${activeId === items.id ? "show" : ""}`}
                >
                  <div className="faq-content-wrapper">
                    <p className="contents">{items.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Faqsection;
