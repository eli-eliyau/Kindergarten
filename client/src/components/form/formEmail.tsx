import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./formEmail.css";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "boxicons";

interface FormInputs {
  fullName: string;
  message: string;
  errorServer: string;
  email: string;
}

const FormEmail = () => {
  const navigete = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<FormInputs>({
    defaultValues: {
      fullName: "",
      message: "",
      email: "",
    },
  });

  const onSubmit = (data: FormInputs) => {
    axios
      .post("http://localhost:500/email", { data }, { withCredentials: true })
      .then((res) => {
        res.data.message === "נשלח המייל בהצלחה" &&
          setError("errorServer", {
            message: "הפניה נשליחה בהצלחה",
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="h4">
        {" פניה לגננת"}
        <span className="material-icons">outgoing_mail</span>
      </h4>

      <label className="label">שם מלא</label>
      <input
        type="text"
        placeholder="שמחה ציון"
        className="input"
        // maxLength={20}
        {...register("fullName", {
          required: "שדה חובה",
          maxLength: {
            value: 20,
            message: "הכנס עד 20 תווים",
          },
          minLength: {
            value: 2,
            message: "הכנס מעל תו 2",
          },
        })}
      />
      {/* <div> */}
      <h6>{errors.fullName?.message}</h6>
      {/* </div> */}
      <label className="label">דוא"ל השולח</label>
      <input
        type="email"
        placeholder="email@gmail.con"
        className="input"
        {...register("email", {
          required: "שדה חובה",
          // minLength: {
          // value: 10,
          // message: "הכנס מעל 10 תווים",
          // },
          // maxLength: {
          // value: 30,
          // message: "הכנס עד 30 תווים",
          // },
        })}
      />
      <h6>{errors.email?.message}</h6>

      <label className="label">כתוב את תוכן הפניה</label>
      <textarea
        placeholder="אני רוצה לרשום את ילדי לגן..."
        className="textarea"
        {...register("message", {
          required: "שדה חובה",
          minLength: {
            value: 5,
            message: "הכנס מעל 5 תווים",
          },
          maxLength: {
            value: 100,
            message: "הכנס עד 100 תווים",
          },
        })}
      ></textarea>
      <h6>{errors.message?.message}</h6>
      <h6>{errors.errorServer?.message}</h6>
      <button type="submit" className="button">
        שליחה
      </button>
    </form>
  );
};

export default FormEmail;
