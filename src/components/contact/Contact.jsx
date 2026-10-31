
import React, { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiCopy,
  FiArrowUpRight,
  FiTerminal,
  FiCheck,
} from "react-icons/fi";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import "./Contact.scss";

// Replace these values with your actual contact details.
const contactDetails = {
  name: "Kawin Sekar R",
  role: "Full Stack Developer",
  location: "Madurai, Tamil Nadu, India",
  phone: "+91 9385823115",
  whatsapp: "91 9385823115",
  email: "kawinsekar6@gmail.com",
  linkedin: "https://www.linkedin.com/in/kawin-r-9077a5411",
  instagram: "https://www.instagram.com/kawin___23",
  instagramUsername: "@kawin___23",
  maps: "https://www.google.com/maps/search/?api=1&query=Tamil+Nadu+India",
};

const Contact = () => {
  const [copied, setCopied] = useState("");

  const copyToClipboard = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);

      setTimeout(() => {
        setCopied("");
      }, 1800);
    } catch (error) {
      console.error("Unable to copy:", error);
    }
  };

  const contactItems = [
    {
      id: "phone",
      title: "PHONE",
      value: contactDetails.phone,
      description: "Click to call directly",
      icon: <FiPhone />,
      href: `tel:${contactDetails.phone.replace(/\s/g, "")}`,
      copyValue: contactDetails.phone,
      className: "phone",
    },
    {
  id: "whatsapp",
  title: "WHATSAPP",
  value: "+91 93858 23115",
  description: "Chat with me on WhatsApp",
  icon: <FaWhatsapp />,
  href: `https://wa.me/919385823115?text=${encodeURIComponent(
    "Hi Kawin, I visited your portfolio and would like to connect."
  )}`,
  copyValue: "+91 9385823115",
  className: "whatsapp",
},
    {
      id: "email",
      title: "EMAIL",
      value: contactDetails.email,
      description: "Send me an email",
      icon: <FiMail />,
      href: `mailto:${contactDetails.email}`,
      copyValue: contactDetails.email,
      className: "email",
    },
    {
      id: "linkedin",
      title: "LINKEDIN",
      value: "linkedin.com/in/kawin-r-9077a5411",
      description: "Let's connect professionally",
      icon: <FaLinkedinIn />,
      href: contactDetails.linkedin,
      copyValue: contactDetails.linkedin,
      className: "linkedin",
    },
    {
      id: "instagram",
      title: "INSTAGRAM",
      value: contactDetails.instagramUsername,
      description: "Follow my updates",
      icon: <FaInstagram />,
      href: contactDetails.instagram,
      copyValue: contactDetails.instagram,
      className: "instagram",
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Section Heading */}
        <div className="contact-heading">
          <span className="contact-subtitle">[ CONTACT ]</span>

          <h2>
            LET'S <span>CONNECT</span>
          </h2>

          <div className="heading-line"></div>

          <p>
  OPEN TO DISCUSSING SOFTWARE DEVELOPMENT OPPORTUNITIES
  <br />
  TECHNICAL COLLABORATIONS, AND INNOVATIVE PROJECTS.
  <br />
  LET'S CONNECT AND CREATE SOMETHING MEANINGFUL!
</p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">

          {/* Left Terminal */}
          <div className="contact-terminal">
            <div className="terminal-header">
              <div className="terminal-title">
                <FiTerminal />
                <span>CONTACT_INFO.EXE</span>
              </div>

              <div className="terminal-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
            </div>

            <div className="terminal-body">
              <div className="terminal-row">
                <span className="terminal-label">NAME</span>
                <span className="terminal-separator">:</span>
                <span className="terminal-value">
                  {contactDetails.name}
                </span>
              </div>

              <div className="terminal-row">
                <span className="terminal-label">ROLE</span>
                <span className="terminal-separator">:</span>
                <span className="terminal-value">
                  {contactDetails.role}
                </span>
              </div>

              <div className="terminal-row">
                <span className="terminal-label">LOCATION</span>
                <span className="terminal-separator">:</span>
                <span className="terminal-value">
                  {contactDetails.location}
                </span>
              </div>

              <div className="terminal-row">
                <span className="terminal-label">STATUS</span>
                <span className="terminal-separator">:</span>
                <span className="terminal-status">
                  <span className="status-dot"></span>
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </div>
            </div>
          </div>

          {/* Right Contact Cards */}
          <div className="contact-cards">
            {contactItems.map((item) => (
              <div
                className={`contact-card ${item.className}`}
                key={item.id}
              >
                <a
                  href={item.href}
                  className="contact-card-link"
                  target={
                    item.id === "phone" || item.id === "email"
                      ? undefined
                      : "_blank"
                  }
                  rel="noopener noreferrer"
                  aria-label={`${item.title}: ${item.value}`}
                >
                  <div className="contact-icon">
                    {item.icon}
                  </div>

                  <div className="contact-details">
                    <span className="contact-card-title">
                      {item.title}
                    </span>

                    <span className="contact-card-value">
                      {item.value}
                    </span>

                    <span className="contact-card-description">
                      {item.description}
                    </span>
                  </div>

                  <FiArrowUpRight className="contact-arrow" />
                </a>

                <button
                  type="button"
                  className="copy-button"
                  onClick={() =>
                    copyToClipboard(item.copyValue, item.id)
                  }
                  aria-label={`Copy ${item.title}`}
                  title={`Copy ${item.title}`}
                >
                  {copied === item.id ? <FiCheck /> : <FiCopy />}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="contact-footer">
          <span>© {new Date().getFullYear()} {contactDetails.name}</span>
          <span className="footer-status">
            <span className="status-dot"></span>
            SYSTEM ONLINE
          </span>
        </div>

      </div>
    </section>
  );
};

export default Contact;
