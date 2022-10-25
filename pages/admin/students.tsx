import type { NextPage } from "next";
import Link from "next/link";
import {
  useDeleteOneStudentMutation,
  useGetStudentsQuery,
} from "../../graphql/generated";

const Home: NextPage = () => {
  const { data } = useGetStudentsQuery();
  console.log("data", data);

  const [deleteOneStudent] = useDeleteOneStudentMutation();

  async function deleteOne(id: string) {
    await deleteOneStudent({
      variables: {
        input: {
          id: id,
        },
      },
      refetchQueries: ["GetStudents"],
    });
  }
  return (
    <div>
      <h1>Students</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      {data?.students?.nodes?.map((student) => (
        <h1 key={student.id} onClick={() => deleteOne(student?.id)}>
          {student.name}
        </h1>
      ))}
    </div>
  );
};

export default Home;
