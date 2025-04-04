import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <div>
      <div className="bg-primary text-white py-32 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl max-w-2xl mx-auto">Please read these terms carefully before applying to Miss Bangladesh Beauty Pageant.</p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Eligibility Criteria</h2>
              <p className="text-gray-700 mb-4">To be eligible for participation in the Miss Bangladesh Beauty Pageant, candidates must meet the following criteria:</p>
              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>Must be a female citizen of Bangladesh by birth or naturalization</li>
                <li>Must be between 18 and 27 years of age as of the date of the national finals</li>
                <li>Must be at least 5'4" (163 cm) in height</li>
                <li>Must have never been married or given birth to a child</li>
                <li>Must not have any criminal record</li>
                <li>Must be in good health and of good moral character</li>
                <li>Must be able to communicate effectively in Bengali and English</li>
                <li>Must be willing to participate in all pageant activities and events</li>
                <li>Must not have any contractual obligations that would prevent participation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Application Process</h2>
              <p className="text-gray-700 mb-4">The application process for Miss Bangladesh Beauty Pageant includes:</p>
              <ol className="list-decimal pl-6 mb-8 text-gray-700 space-y-2">
                <li>Submission of a completed application form with all required information</li>
                <li>Submission of recent photographs (full-length, close-up, and profile)</li>
                <li>Payment of the application fee (if applicable)</li>
                <li>Participation in regional auditions (if required)</li>
                <li>Final selection for the national competition</li>
              </ol>
              <p className="text-gray-700 mb-8">
                All applications will be reviewed by the Miss Bangladesh Organization selection committee. The decision of the committee regarding selection is final and binding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Contestant Obligations</h2>
              <p className="text-gray-700 mb-4">Selected contestants are expected to:</p>
              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>Attend all training sessions, workshops, and events organized by Miss Bangladesh Organization</li>
                <li>Maintain a high standard of conduct and behavior at all times</li>
                <li>Comply with all rules and regulations of the pageant</li>
                <li>Participate in promotional activities and media appearances as required</li>
                <li>Refrain from making any statements or engaging in any activities that may bring disrepute to the pageant</li>
                <li>Grant Miss Bangladesh Organization the right to use their name, photographs, and videos for promotional purposes</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Winner's Obligations</h2>
              <p className="text-gray-700 mb-4">The winner of Miss Bangladesh Beauty Pageant will be required to:</p>
              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>Represent Bangladesh at the designated international pageant</li>
                <li>Fulfill all contractual obligations with Miss Bangladesh Organization for the duration of her reign</li>
                <li>Participate in social, charitable, and promotional events as directed by the organization</li>
                <li>Maintain the standards and values of Miss Bangladesh throughout her reign</li>
                <li>Not enter into any commercial contracts or endorsements without prior approval from the organization</li>
                <li>Comply with all rules and regulations of the international pageant</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Disqualification</h2>
              <p className="text-gray-700 mb-4">A contestant may be disqualified from the pageant if:</p>
              <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
                <li>Any information provided in the application is found to be false or misleading</li>
                <li>She fails to comply with the rules and regulations of the pageant</li>
                <li>She engages in any behavior that brings disrepute to the pageant</li>
                <li>She is unable to fulfill her obligations as a contestant</li>
                <li>She violates any terms of the contestant agreement</li>
              </ul>
              <p className="text-gray-700 mb-8">
                The decision of Miss Bangladesh Organization regarding disqualification is final and binding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-serif font-bold mb-6 text-primary">Changes to Terms and Conditions</h2>
              <p className="text-gray-700 mb-8">
                Miss Bangladesh Organization reserves the right to modify these terms and conditions at any time. Any changes will be communicated to all contestants and will be effective immediately upon notification.
              </p>
            </motion.div>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-gray-700 text-center">
                By submitting an application to Miss Bangladesh Beauty Pageant, you acknowledge that you have read, understood, and agree to abide by these terms and conditions.
              </p>
              <div className="flex justify-center mt-8">
                <a href="/apply" className="btn-primary">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
