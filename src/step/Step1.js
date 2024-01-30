import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { submit } from "./personSlice";
import { useNavigate } from "react-router-dom";

function Step1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const person = useSelector((state) => state.person);
  const { register, handleSubmit } = useForm({ defaultValues: { person } });
  const onSubmit = (data) => {
    dispatch(submit(data.person));
    navigate("/step2");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center">Step 1 - Personal Information</h2>
      <div>
        <label>Name</label>
        <input {...register("firstName")} placeholder="First name" />
      </div>
      <input type="submit" />
    </form>
  );
}

export default Step1;
