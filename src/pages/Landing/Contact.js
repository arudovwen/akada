import * as React from "react";
function Contact() {

  const [values, setValues]  = React.useState({
    name:'',
    email:'',
    message:''
  })

  function handleChange(e){
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  function sendMessage(e){
    e.preventDefault()

const body = `
Name: ${values.name},
Email: ${values.email}, 
Message: ${values.message}`

window.open(`mailto:info@akadaplay.com?subject=New message&body=${body}`, '_blank')
setValues({
    name:'',
    email:'',
    message:''
  })
  }

  return (
    <section className="bg-gray-100 py-14 lg:py-0">
      <main className="grid grid-cols-1 justify-center   md:flex container md:gap-x-32 md:py-32 items-start text-left mx-auto">
        <div className="w-full lg:w-1/3">
          <h3 className="text-3xl lg:text-5xl text-black text-left font-bold mb-4 capitalize ">
            contact us
          </h3>
          <p className="text-sm md:text-base mb-6 lg:mb-0">
          9B Onikoyi Lane, parkview estate, Ikoyi 
          </p>
          <p>Info@akadaplay.com</p>
          <p>08098714987</p>
        </div>
        <div className="w-full lg:w-2/3">
          <form onSubmit={(e)=>sendMessage(e)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <div className="">
                <label htmlFor="" className="capitalize">
                  name
                </label>
                <input
                  type="text"
                  value={values.name}
                  name="name"
                  onChange={(e)=> handleChange(e)}
                  className="block border-b bg-gray-100 border-black w-full  h-10 text-xl font-medium"
                />
              </div>
              <div className="">
                <label htmlFor="" className="capitalize">
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={(e)=> handleChange(e)}
                  className="block border-b bg-gray-100 border-black w-full  h-10 text-xl font-medium"
                />
              </div>
            </div>

            <div className="mb-20">
              <label htmlFor="" className="capitalize">
                message
              </label>
              <input
                type="text"
                name="message"
                value={values.message}
                onChange={(e)=> handleChange(e)}
                className="block border-b bg-gray-100 border-black w-full h-10 text-xl font-medium"
              />
            </div>
        
            <button type="submit" className="border-2 border-black text-center w-full py-4 lg:py-5 uppercase font-bold text-lg lg:text-xl">
              send
            </button>
          
           
          </form>
        </div>
      </main>
    </section>
  );
}

export default Contact;
