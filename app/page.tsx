'use client';

export default function Home() {

  const openWhatsapp = () => {
    window.open("https://wa.me/6281211111111", "_blank");    
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center p-20 text-center bg-gradient-to-r from-slate-900 to-slate-700">
          <h1
            className="mb-8 text-4xl font-extrabold text-dark-grey-900 lg:text-5xl xl:w-11/12 xl:text-6xl text-white"
          >
            Optimize Your Business with AI, Automation & Chatbot!
          </h1>
          <p
            className="mb-10 text-base font-medium text-dark-grey-600 xl:w-3/4 text-white"
          >
            Dinar Tech Mediatama Helps Revolutionize Your Business with AI, Automation & Chatbots – Maximize Efficiency, Save Time, and Elevate Customer Experience Like Never Before! 🚀
          </p>
          <div className="flex flex-col items-center lg:flex-row">
            <button
              className="flex items-center rounded-xl px-5 py-4 text-sm font-medium text-white bg-blue-500 cursor-pointer hover:bg-blue-600"
              onClick={() => openWhatsapp()}
            >
              Talk with our 24 hour agent
            </button>
          </div>
      </div>
   
  );
}
