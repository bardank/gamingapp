import React from 'react'

const Home = ({id, ...props}) => {
  return (
    <div id={id} className="py-2">
      <hr className="border-1 border-gray-400 " />
      <h2 className="text-center font-bold text-xl py-4">
        About me, The gaming greeek
      </h2>

      <div className="lg:px-32 py-6">
        <iframe
          src="https://www.youtube.com/embed/KgRh8Png7iQ?autoplay=1&mute=1"
          frameBorder="0"
          allowFullScreen
          className="h-96 w-full object-cover"
        ></iframe>
      </div>
      <h2 className="text-center font-semibold text-xl py-2">I am who I Am!</h2>
      <p className="text-sm italic text-center text-black py-3">
        With Passion For Real, Goming Treat
      </p>
      <p className="text-black text-center font-thin tracking-wider text-sm py-4">
        Just me, myself and I, exploring the universe of unknownment. I have a
        heart of love and an interest of lorem ipsum and mauris neque quam blog.
        I want to share my world with you. Praesent tincidunt sed tellus ut
        rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
        congue gravida diam non fringilla. Praesent tincidunt sed tellus ut
        rutrum. Sed vitae justo condimentum,
      </p>
      <hr className="border-1 border-gray-400 " />
    </div>
  );
}

export default Home