import React from "react";

export default function AboutUs() {
  return (
    <div className="containerBox">
    <div className="max-w-6xl mx-auto   py-16 text-white ">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-Primary mb-10 pt-24">
        About Us
      </h1>

      {/* Our Mission */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4 text-Primary">Our Mission</h2>
        <p className="text-gray-300 leading-7">
          Our mission is to create smart, modern, and user-friendly digital
          solutions that help people and businesses work faster, smoother, and
          better. We focus on innovation, simplicity, and long-term value.
        </p>
      </section>

      {/* Our Values */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4 text-Primary">Our Values</h2>
        <ul className="space-y-3 text-gray-300">
          <li>• Innovation – We explore new ideas and technologies.</li>
          <li>• Quality – We care about clean, scalable, and polished work.</li>
          <li>• User-First – We always prioritize user experience.</li>
          <li>• Trust – We build strong and lasting relationships.</li>
          <li>• Growth – We improve continuously and adapt fast.</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-Primary">Why Choose Us</h2>
        <p className="text-gray-300 leading-7">
          We deliver digital experiences that are not only functional but also
          meaningful. Our team is passionate, detail-oriented, and committed to
          delivering results that truly make a difference. We combine creativity,
          modern technologies, and strategic thinking to build products you can
          rely on.
        </p>
      </section>
    </div>
    </div>
  );
}
