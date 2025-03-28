import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-screen bg-slate-800">
      <section className="2xl:container mx-auto py-8 md:py-12 px-8 text-slate-300">
        <p className="text-center text-sm">
          © {currentYear} GraspEaser. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
