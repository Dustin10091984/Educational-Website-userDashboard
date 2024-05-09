import React, { useEffect, useState } from "react";


import Acordian from "./Acordion";
import axios from "axios";

const Faq = ({title}) => {
  const [question, setQuestion] = useState([]);
  const[isLoading,setIsLoading]=useState(true)
  useEffect(() => {
    axios.get("https://api.ebsalar.com/api/v1/front/question/")
      .then((res) => {
        setQuestion(res.data.results);
        setIsLoading(false)
      })
      .catch((err) => console.log(err));
    console.clear();
    console.log(question);
  },[]);
  const [open, setOpen] = useState(false);
  const toggle = (id) => {
    if (open === id) {
      return setOpen(null);
    }
    setOpen(id);
  };
  if(isLoading){
    return <div>
      <p>loading</p>
    </div>
  }
  return (
    //  <div className='  w-full '>
    <div className="w-full flex justify-center items-center  min-h-screen  flex-col">
      <div className="overflow-y-auto w-full flex-col flex items-center min-h-[600px] scrollbar-hide ">
        <p className="w-full text-right md:text-sm py-4 pr-4 text-gray-50 text-xl ">
          {title}
        </p>
        <section className="group  w-full flex justify-center border-r-4  p-3 ">
          <div className="flex flex-col  w-full items-center  justify-center   cursor-pointer">
            {question.map((data, id) => {
              return (
                <Acordian
                  key={id}
                  open={id === open}
                  title={data.title}
                  desc={data.description}
                  img={data.file}
                  alt="online ceo"
                  // btnlink="#"
                  // btnLable="اطلاعات بیشتر"
                  toggle={() => toggle(id)}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
    //  </div>
  );
};

export default Faq;
