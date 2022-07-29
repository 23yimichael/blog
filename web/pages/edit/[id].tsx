import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Layout from "../../components/Layout";
import {
  useDeleteArticleMutation,
  useReadArticleQuery,
  useUpdateArticleMutation,
} from "../../generated/graphql";
import Context from "../../utils/context";
import { createUrqlClient } from "../../utils/createUrqlClient";
import Page404 from "./../404";

const Edit = () => {
  const router = useRouter();
  const { user } = useContext(Context);
  const [{ data, fetching }] = useReadArticleQuery({
    variables: {
      id: parseInt(router.query.id as string),
    },
  });
  const [, updateArticle] = useUpdateArticleMutation();
  const [, deleteArticle] = useDeleteArticleMutation();

  const [img, setImg] = useState("");
  const [imgError, setImgError] = useState("");
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [text, setText] = useState("");
  const [textError, setTextError] = useState("");
  const [genre, setGenre] = useState("");
  const [genreError, setGenreError] = useState("");
  const [featured, setFeatured] = useState(-1);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!fetching && data) {
      setImg(data!.readArticle.img);
      setTitle(data!.readArticle.title);
      setText(data!.readArticle.text);
      setGenre(data!.readArticle.genre);
    }
  }, [data, fetching]);

  const handleSubmit = async (e: any) => {
    const response = await updateArticle({
      id: parseInt(router.query.id as string),
      title,
      genre,
      img,
      text,
      featured,
    });
    if (response?.data?.updateArticle?.error?.field === "Image") {
      setImgError(response.data.updateArticle.error.message);
    } else if (response.data?.updateArticle.error?.field === "Title") {
      setTitleError(response.data?.updateArticle.error?.message);
    } else if (response.data?.updateArticle.error?.field === "Genre") {
      setGenreError(response.data?.updateArticle.error.message);
    } else if (response.data?.updateArticle.error?.field === "Text") {
      setTextError(response?.data?.updateArticle?.error?.message);
    }

    router.push(`/view/${response.data?.updateArticle.article?.id}`);
    e.preventDefault();
  };

  const handleDelete = async () => {
    await deleteArticle({ id: parseInt(router.query.id as string) });
    router.push("/");
  };

  if (!user) {
    return <Page404 />;
  }

  return (
    <Layout>
      <div className="flex justify-center">
        <div>
          <div className="text-center font-poppins font-semibold 2xl:text-5xl xl:text-3xl lg:text-xl my-12">
            Edit Article
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
              value={genre}
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
            <div className="font-poppins font-semibold text-gray text-sm">
              Featured?
            </div>
            <select
              value={featured}
              className="border-b-[1px] border-lightgray p-4"
              onChange={(e) => setFeatured(parseInt(e.target.value))}
            >
              <option value={-1}>No</option>
              <option value={0}>Big</option>
              <option value={1}>Upper Right</option>
              <option value={2}>Lower Right</option>
            </select>
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
                className="hover:cursor-pointer duration-500 bg-red-500 hover:bg-red-300 text-center p-4 w-full font-poppins font-semibold text-white shadow-lg"
              >
                Cancel
              </div>
              <div
                onClick={handleSubmit}
                className="hover:cursor-pointer duration-500 bg-teal-500 w-full hover:bg-teal-300 text-center p-4 font-poppins font-semibold text-white shadow-lg"
              >
                Update
              </div>
            </div>
            <div
              onClick={() => setOpen(true)}
              className="hover:cursor-pointer duration-500 bg-red-900 hover:bg-red-600 text-center p-4 w-full font-poppins font-semibold text-white shadow-lg"
            >
              Delete
            </div>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>
                <div className="font-poppins">
                  Are you sure that you want to delete this article? This action
                  CANNOT be undone.
                </div>
              </DialogTitle>
              <DialogActions>
                <div
                  onClick={() => setOpen(false)}
                  className="hover:cursor-pointer duration-500 font-poppins font-semibold bg-teal-500 hover:bg-teal-300 text-white p-4"
                >
                  Cancel
                </div>
                <div
                  onClick={handleDelete}
                  className="hover:cursor-pointer duration-500 font-poppins font-semibold bg-red-500 hover:bg-red-300 text-white p-4"
                >
                  Delete
                </div>
              </DialogActions>
            </Dialog>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Edit);
