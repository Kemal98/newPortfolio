import React from 'react'

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-containerContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide ">
        What is Next ?
      </p>
      <h2 className="font-fontTitle text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        If you are looking for a skilled and reliable developer for your next
        project, I would be delighted to connect with you. Feel free to reach
        out to me through the email. Let's collaborate and bring your ideas to
        life!
      </p>
      <a href="mailto:mokskemal@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen trackin-wide rounded-md hover:bg-haverColor duration-500">
          Say Hello
        </button>
      </a>
    </div>
  );
}

export default Contact