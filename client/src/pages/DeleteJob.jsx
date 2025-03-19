import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";


export const action =
  (queryClient) =>
  async ({ params }) =>  {
  const errors = { msg: '' };
  try {
    await customFetch.delete(`/jobs/${params.id}`);
      queryClient.invalidateQueries(["jobs"]);
      console.log("Job deleted successfully");
  } catch (error) {
    errors.msg = error?.response?.data?.msg ;
  }
  return redirect("/dashboard/all-jobs");
}

const DeleteJob = ()=>{
  return <h1>DeleteJob Page</h1>;
}
export default DeleteJob;

