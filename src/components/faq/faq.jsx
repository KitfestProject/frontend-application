import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I purchase tickets for performances?",
      answer:
        "You can purchase tickets directly through our website by selecting the event you want to attend and following the checkout process. Tickets can also be purchased at our box office during opening hours.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Tickets can be cancelled or refunded up to 48 hours before the performance. After this period, tickets are non-refundable but may be exchanged for another performance of equal value, subject to availability.",
    },
    {
      question: "Are there discounts available for students or seniors?",
      answer:
        "Yes, we offer discounted tickets for students, seniors, and groups of 10 or more. Valid ID is required when collecting student/senior tickets at the venue.",
    },
    {
      question: "How early should I arrive before a performance?",
      answer:
        "We recommend arriving at least 30 minutes before the performance start time. This allows time for ticket collection, finding your seats, and enjoying the pre-show atmosphere.",
    },
    {
      question:
        "I paid for the ticket but didn't receive it. What should I do?",
      answer:
        "If you haven't received your ticket after payment, please check your spam folder for the email confirmation. If you still can't find it, contact our support team immediately with your payment details for assistance.",
    },
    {
      question:
        "Who should I contact for inquiries about the purchase process?",
      answer:
        "Kindly contact us at tel: (+254) 794 785768 or email theatreke@kitfest.co.ke for any purchase-related inquiries.",
    },
    {
      question: "Does the purchase process include M-Pesa and card payments?",
      answer:
        "Yes, all the payment methods mentioned above are included. We accept M-Pesa, credit/debit cards, and other mobile money options for your convenience.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 ">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <button
              className={`w-full px-6 py-4 text-left flex justify-between items-center bg-primary dark:bg-darkGray text-white hover:bg-opacity-90 transition-colors`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium text-lg">{faq.question}</span>
              {activeIndex === index ? (
                <FiChevronUp className="w-5 h-5" />
              ) : (
                <FiChevronDown className="w-5 h-5" />
              )}
            </button>

            <div
              className={`px-6 py-4 ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-white">
        <p className="mb-4 font-bold">Still have questions?</p>
        <a
          href="/contact-us"
          className="inline-block font-bold px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default FAQ;
