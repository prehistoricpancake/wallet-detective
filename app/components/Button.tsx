import React, { useState } from 'react';


interface ButtonProps {
  url: string;
}

export const SubmitButton = () => {

  // useTransition would be better but I can't seem to find why it's not accessing the loading value in the object, will find out why
   
  const [loading, setLoading] = useState('Find It')
  
  const handleClick = () => {
    setLoading('Finding It...')
  }
  return (
    <button
     onClick={() => handleClick()}
     className="bg-black h-12 px-3 text-white rounded-lg lg:w-full md:w-full sm:w-full xs:w-full search"
      type="submit"
    >
      {loading}
    </button>
  );
};



export const HomeButton = (props: ButtonProps) => {
  const [loading, setLoading] = useState('Home')
  
  const handleClick = () => {
    setLoading('Going Home...')
  }
  return (
    <a href={props.url}>
    <button
      onClick={() => handleClick()}
     className="bg-black h-12 px-3 text-white rounded-lg lg:w-full md:w-full sm:w-full xs:w-full search"
      type="submit"
    >
      {loading}
    </button>
    </a>
  )


}



