'use client';

// Removed unused useState import
import Image from 'next/image';

// Reusable FormField component to keep the form JSX clean.
interface FormFieldProps {
  id: string;
  name: string;
  type?: string;
  label: string;
  placeholder: string;
  required?: boolean;
  isTextarea?: boolean;
}
const FormField: React.FC<FormFieldProps> = ({ id, name, type = 'text', label, placeholder, required = false, isTextarea = false }) => {
  const inputClasses =
    'peer block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gratext-gradient-6-start focus:outline-none placeholder-transparent';
  const labelClasses =
    'absolute text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-gradient-6-start peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-3 start-1';

  return (
    <div className="relative mb-4">
      {isTextarea ? (
        <textarea id={id} name={name} className={inputClasses} placeholder={placeholder} rows={5} required={required} />
      ) : (
        <input id={id} name={name} type={type} className={inputClasses} placeholder={placeholder} required={required} />
      )}
      <label htmlFor={id} className={labelClasses}>
        {label} {required && '*'}
      </label>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-18">
      <div className="bg-blue-50/50 mb-8 rounded-lg">
        <div className="p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-x-8 xl:gap-x-12 gap-y-10 items-center">
            {/* Left Column: Call to Action */}
            <div className="lg:pr-10">
              <Image src="/img/icons/email.svg" alt="Email Icon" width={48} height={48} className="mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                If you <span className="text-gradient-6-start">Like</span> what you see, let's work <span className="text-gradient-6-start">together.</span>
              </h2>
              <p className="text-lg text-gray-700">I'm always open to discussing product design work or partnership opportunities.</p>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <form className="contact-form" action="mailto:fatihfwz87@gmail.com" method="post">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                  <div className="md:col-span-1">
                    <FormField id="form_name" name="name" label="Name" placeholder="Your Name" required />
                  </div>
                  <div className="md:col-span-1">
                    <FormField id="form_email" name="email" type="email" label="Email" placeholder="jane.doe@example.com" required />
                  </div>
                  <div className="md:col-span-2">
                    <FormField id="form_message" name="message" label="Message" placeholder="Your message" isTextarea required />
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="hover:cursor-pointer bg-gradient-6-start text-white font-semibold py-3 px-6 rounded-lg hover:bg-gradient-7-start transition-colors duration-300">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
