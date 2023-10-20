import { useEffect, useState } from "react";


const Features = () => {

  const [features, setFeatures] = useState([])
  useEffect(()=>{
    fetch('/Features.json')
    .then(res =>res.json())
    .then(data =>{
      setFeatures(data)
    })
  },[])

  console.log(features)

  return (
    <div className="flex flex-wrap justify-center p-4">
    {features.map((feature, index) => (
      <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{feature.title}</h2>
          <p className="text-gray-700 text-base">{feature.description}</p>
          <ul className="mt-3">
            {feature.additionalFeatures.map((item, i) => (
              <li key={i} className="flex items-center mb-2">
                <span className="text-green-500 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 1.293a1 1 0 0 1 1.414 0l7 7a1 1 0 1 1-1.414 1.414L11 4.414V17a1 1 0 1 1-2 0V4.414L2.707 9.707a1 1 0 1 1-1.414-1.414l7-7z"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>

  );
};

export default Features;