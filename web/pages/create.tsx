import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { useCreateArticleMutation } from "../generated/graphql";
import Context from "../utils/context";
import { createUrqlClient } from "../utils/createUrqlClient";
import Page404 from "./404";

const Create = () => {
  const router = useRouter();
  const { user } = useContext(Context);
  const [img, setImg] = useState("");
  const [imgError, setImgError] = useState("");
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [text, setText] = useState("");
  const [textError, setTextError] = useState("");
  const [genre, setGenre] = useState("");
  const [genreError, setGenreError] = useState("");

  const [, createArticle] = useCreateArticleMutation();

  const handleSubmit = async (e: any) => {
    const response = await createArticle({ title, genre, img, text });
    if (!response.data?.createArticle.error) {
      router.push(`/view/${response.data?.createArticle.article?.id}`);
    } else {
      if (response.data.createArticle.error.field === "Image") {
        setImgError(response.data.createArticle.error.message);
      } else if (response.data.createArticle.error.field === "Title") {
        setTitleError(response.data.createArticle.error.message);
      } else if (response.data.createArticle.error.field === "Genre") {
        setGenreError(response.data.createArticle.error.message);
      } else {
        setTextError(response.data.createArticle.error.message);
      }
    }
    e.preventDefault();
  };

  if (!user) {
    return <Page404 />;
  }

  return (
    <Layout>
      <div className="flex justify-center">
        <div>
          <div className="text-center font-poppins font-semibold 2xl:text-5xl xl:text-3xl lg:text-xl my-12">
            Create Article
          </div>
          <Form>
            <Input
              error={titleError}
              label="Title"
              setValue={setTitle}
              type="text"
              value={title}
            />
            {/* <div className="font-poppins font-semibold text-gray text-sm">
              Additional Authors
            </div>
            {user !== 1 && (
              <div className="flex space-x-4">
                <input type="checkbox" />
                <div className="font-poppins font-semibold text-base">
                  Michael Yi
                </div>
              </div>
            )}
            {user !== 2 && (
              <div className="flex space-x-4">
                <input type="checkbox" />
                <div className="font-poppins font-semibold text-base">
                  Christian Beckering
                </div>
              </div>
            )}
            {user !== 3 && (
              <div className="flex space-x-4">
                <input type="checkbox" />
                <div className="font-poppins font-semibold text-base">
                  Ian Park
                </div>
              </div>
            )} */}

            <div className="font-poppins font-semibold text-gray text-sm">
              Genre
            </div>
            <select
              className="border-b-[1px] border-lightgray p-4"
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="">Select A Genre</option>
              <option value="Music">Music</option>
              <option value="Film/TV">Film/TV</option>
            </select>
            <div className="font-poppins font-semibold text-red-500 text-sm">
              {genreError}
            </div>
            <Input
              error={imgError}
              label="Image Link"
              setValue={setImg}
              type="text"
              value={img}
            />
            <Input
              error={textError}
              label="Text"
              setValue={setText}
              type="textfield"
              value={text}
            />
            <div className="flex space-x-8">
              <div
                onClick={() => router.back()}
                className="duration-500 bg-red-500 hover:bg-red-300 text-center p-4 w-full font-poppins font-semibold text-white shadow-lg"
              >
                Cancel
              </div>
              <div
                onClick={handleSubmit}
                className="duration-500 bg-teal-500 w-full hover:bg-teal-300 text-center p-4 font-poppins font-semibold text-white shadow-lg"
              >
                Submit
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(Create);
