
const Popup = ({onClose}) => {

  return (
    <div className="inset-0 fixed bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-tertiary rounded-xl py-10 px-10 flex flex-col gap-5">
            <div className="flex flex-col items-center">
                <h1 className="font-semibold text-[30px] mb-2">Message Sent</h1>
                <p className="text-secondary text-[17px] w-[320px] text-center">Thanks for reaching out, I'll get back to you as soon as possible.</p>
            </div>
            <button className="bg-white text-black-200 font-semibold py-3 rounded-lg mt-5"
            onClick={onClose}
            >
            Continue
            </button>
        </div>
    </div>
  )

}

export default Popup