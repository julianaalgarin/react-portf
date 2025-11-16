import Reveal from "./Reveal"


const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12' id="contact">
      <Reveal>
      <div className='grid md:grid-cols-2 place-items-center'>
        <div>
          <div className='text-gray-300 my-3'>
            <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span></h3>
            <p className='text-justify leading-7 w-11/12 mx-auto'>
            Hello, I'm Juliana, a Developer with over a year of hands-on programming experience and more than 3 years of professional background in marketing, sales, and customer service. I specialize in creating scalable, user-friendly, and visually appealing web solutions with a strong focus on performance, usability, and modern development practices. My diverse experience allows me to bridge the gap between technology and business needs, delivering solutions that not only meet technical requirements but also align with user expectations and organizational objectives.
            </p>
          </div>
          <div className='flex mt-10 items-center gap-7'>
            <div className='bg-grey-800/40 p-4 rounded-lg'>
              <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                11 <span>+</span>
              </h3>
              <p className='text-xs md:text-base'><span>Projects</span></p>
            </div>
            <div className='bg-grey-800/40 p-5 rounded-lg'>
              <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                3 <span>+</span>
              </h3>
              <p className='text-xs md:text-base'><span>years of experience</span></p>
            </div>
            <div className='bg-grey-800/40 p-5 rounded-lg'>
              <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                30 <span>+</span>
              </h3>
              <p className='text-xs md:text-base'><span>happy clients</span></p>
            </div>
          </div>
        </div>

        <form
          action="https://getform.io/f/aollolrb"
          method='POST'
          className='max-w-6xl p-5 md:p-12'
          id='form'
        >
          <p className='text-gray-100 font-bold text-xl mb-2'>
            Let&apos;s connect!
          </p>
          <input
            type="text"
            id="name"
            placeholder='Your name...'
            name='name'
            className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
          />
          <input
            type="email"
            id="email"
            placeholder='Your email...'
            name='email'
            className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
          />
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="Your message ..."
            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
          />
          <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
          >Send message
          </button>
        </form>
      </div>
      </Reveal>

    </div>
  )
}

export default Contact
