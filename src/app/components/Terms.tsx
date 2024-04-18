import React from "react";
import Link from "next/link";

const Term: React.FC = () => {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-blue text-2xl mb-4 font-extrabold">
          Cove Design and Contracting Ltd. Terms of Service
        </h1>
        <p className="mb-4">
          Welcome to Cove Design and Contracting Ltd. These Terms of Service
          ("Terms") govern your access to and use of our design and contracting
          services (referred to as the "Services"). By accessing or using our
          Services, you agree to be bound by these Terms.
        </p>
        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Acceptance of Terms</h2>
          <p>
            By accessing or using our Services, you agree to these Terms and to
            comply with all applicable laws and regulations. If you do not agree
            with these Terms, please do not use our Services.
          </p>
        </div>
        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Use of Services</h2>
          <p>
            a. Our Services are designed to deliver exceptional ddesigns and
            construction solutions with integrity, innovation, and excellence.
            From residential projects to commercial developments, we approach
            each endeavor with a commitment to quality craftsmanship, attention
            to detail, and client satisfaction.
            <br />
            b. You agree to use our Services only for their intended purposes
            and in compliance with all applicable laws and regulations.
          </p>
        </div>
        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Intellectual Property</h2>
          <p>
            a. All design plans, content, and materials provided through our
            Services are the property of Cove Design and Contracting Ltd. or its
            licensors and are protected by copyright, trademark, and other
            intellectual property laws.
            <br /> b. You may not modify, reproduce, distribute, display, or
            otherwise use any content from our Services without the prior
            written consent of Cove Design and Contracting Ltd.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Privacy</h2>
          <p>
            a. Our Privacy Policy governs the collection, use, and disclosure of
            any personal information shared during our engagement with the
            Services. By engaging with our Services, you consent to the
            collection and use of your information in accordance with our
            Privacy Policy.
          </p>
        </div>
        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Limitation of Liability</h2>
          <p>
            a. To the fullest extent permitted by law, Cove Design and
            Contracting Ltd. shall not be liable for any direct, indirect,
            incidental, special, or consequential damages arising out of or in
            any way connected with your engagement with our Services.
          </p>
        </div>
        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Termination</h2>
          <p>
            a. Cove Design and Contracting Ltd. reserves the right to terminate
            or suspend your engagement with our Services at any time and for any
            reason, without prior notice.
          </p>
        </div>
        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Changes to Terms</h2>
          <p>
            a. We reserve the right to update or modify these Terms at any time
            without prior notice. Your continued engagement with our Services
            after any such changes constitutes your acceptance of the revised
            Terms.
          </p>
        </div>
        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Governing Law</h2>
          <p>
            a. These Terms shall be governed by and construed in accordance with
            the laws of the jurisdiction of Cove Design and Contracting Ltd.,
            without regard to its conflict of law principles.
          </p>
        </div>
        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms, please
            contact us at{" "}
            <Link
              className="text-blue"
              href="mailto:cdcdesignandconstruction@gmail.com"
              target="_blank"
            >
              cdcdesignandconstruction@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Term;
