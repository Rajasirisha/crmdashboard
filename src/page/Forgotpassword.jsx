import { useCallback } from "react";
// import Login from "./Login";
import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';

const ForgotPassword = () => {
  const onSendcodeClick = useCallback(() => {
  
  }, []);
  const navigate = useNavigate();
  const handleBacktoLogin = () => {
  navigate('/')
       console.log('Back to login clicked');
};
const backtoLogin = {
    color: '#173767',
};
  return (
    <div className="h-screen h-full">
    <div className="flex w-full h-full">
      <div className="w-4/6 p-8">
        <div className="flex justify-center items-center ">
          <div className="max-w-[600px] mx-auto w-full">
          <img src="images/Logo.png" alt="logo" />
          </div>
        </div>
        <div className="absolute top-[120px] left-[420px] w-[63px] h-[63px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[63px] h-[63px] border-[1px] border-solid border-gainsboro" />
        <img
          className="absolute top-[15px] left-[15px] w-[35px] h-[35px] overflow-hidden "
          alt=""
          src="/heroiconsoutlinefingerprint.svg"
        />
      </div>
        <div className="h-full flex justify-center items-center">
          <div className="w-full m-auto" style={{ maxWidth: "293px" }}>
            <h4 className="pb-10 text-4xl text-center">Forgot Password?</h4>
            <div className="w-full">
              <p className="pb-2 leading-none font-semibold">
                Email<span className="text-[#FF0000]"> *</span>
              </p>
              <input
                className="text-base w-full outline-none leading-none bg-transparent border-2 border-[#B3B3B3] p-2 rounded"
                placeholder="Enter Your Email"
              />
            </div>
               <div className="w-full pt-10">
                    <button
                      style={{ background: "#173767" }}
                      className="w-full bg-[#173767] text-white p-2 rounded-xl outline-none border-none font-semibold"
                    onClick={onSendcodeClick}>
                     <Link to="/recovery">Send Code</Link>
                    </button>
                  </div>
      </div>
      </div>
      <div className="w-full">
         <p className="absolute top-[520px] left-[370px] w-[164px] h-[30px] cursor-pointer text-center font-semibold text-darkslateblue"
          onClick={handleBacktoLogin} style={backtoLogin}>      
        <Link to="" > Back to Login</Link>
       <img
          className="absolute top-[2px] left-[0px] w-[25px] h-[25px] overflow-hidden"
          alt=""
          src="/pharrowleft.svg"
        /></p>
      </div>
      
        </div>
        <div className="w-2/6 right">
        </div>
        <div className="absolute top-[600px] left-[330px] rounded-8xs  bg-[#173767] w-[70px] h-1.5" />
        <div className="absolute top-[600px] left-[410px] rounded-8xs  bg-[#B3B3B3] w-[70px] h-1.5" />
        <div className="absolute top-[600px] left-[490px] rounded-8xs  bg-[#B3B3B3] w-[70px] h-1.5" />
        </div>
 </div>
);
};

export default ForgotPassword;
