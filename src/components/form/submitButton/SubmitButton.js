import './SubmitButtonModule.css'

export default function SubmitButton({text}) {
    return (
      <div>
        <button className='btn'>{text}</button>
      </div>
    );
  }