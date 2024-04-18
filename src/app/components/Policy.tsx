import React from "react";
import Link from "next/link";

const Privacy: React.FC = () => {
  return (
    <main>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-blue text-2xl mb-4 font-extrabold">
          Cove Design and Contracting Ltd. Privacy Policy
        </h1>
        <p className="mb-4">
          This Privacy Policy describes how Cove Design and Contracting Ltd.
          ("we", "us", or "our") collects, uses, and shares your personal
          information when you engage with our design and contracting services
          (referred to as the "Services").
        </p>
        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us
            when engaging with our Services. This may include: Contact
            information, such as your name, email address and phone number.
            Project details and specifications provided by you. Correspondence
            and communications with us.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">
            How We Use Your Information
          </h2>
          <p>
            We may use the personal information we collect for the following
            purposes:
            <p>
              To provide and deliver our design and contracting services to you.
            </p>
            <p>
              To communicate with you regarding your projects and inquiries.
            </p>
            <p>To respond to your questions, comments, and requests.</p>
            <p>
              To send you updates, and marketing communications related to our
              services, where permitted by law.
            </p>
            <p>
              To comply with legal obligations and enforce our Terms of Service.
            </p>
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            described in this Privacy Policy. We may share your information
            with: Service providers and contractors who assist us in providing
            our services, subject to confidentiality agreements. Legal
            authorities, as required by law or to protect our rights, property,
            or safety.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Data Security</h2>
          <p>
            We implement reasonable security measures to protect the
            confidentiality and integrity of your personal information. However,
            please be aware that no method of transmission over the internet or
            electronic storage is completely secure, and we cannot guarantee
            absolute security.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">
            Retention of Personal Information
          </h2>
          <p>
            We retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Your Rights</h2>
          <p>
            You may have certain rights regarding your personal information,
            including the right to access, correct, or delete your information.
            If you wish to exercise any of these rights, please contact us using
            the contact information provided below.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">
            Changes to This Privacy Policy
          </h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time without prior notice. Any changes will be effective immediately
            upon posting the revised Privacy Policy on our website. Your
            continued engagement with our Services after any such changes
            constitutes your acceptance of the revised Privacy Policy.
          </p>
        </div>

        <div className="text-gray-700 mb-6">
          <h2 className="text-blue text-lg mb-2">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at
            privacy@covedesignandcontracting.com.
            <Link
              href="mailto:cdcdesignandconstruction@gmail.com"
              target="_blank"
              className="text-blue"
            >
              cdcdesignandconstruction@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
