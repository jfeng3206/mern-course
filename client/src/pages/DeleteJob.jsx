import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";


export  async function action({ params }) {
  const errors = { msg: '' };
  try {
    await customFetch.delete(`/jobs/${params.id}`);
  } catch (error) {
    errors.msg = error?.response?.data?.msg ;
  }
  return redirect("/dashboard/all-jobs");
}

const DeleteJob = ()=>{
  return <h1>DeleteJob Page</h1>;
}
export default DeleteJob;

