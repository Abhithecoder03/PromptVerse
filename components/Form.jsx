import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
      <section className="w-full max-w-full  flex-col justify-center pt-24 ">
          <div className="flex flex-col items-center w-full">
              <div className=" shadow-slate-200 shadow-lg rounded-lg p-8 w-4/5 flex items-center flex-col bg-gradient-to-b from-slate-800 to-slate-900 ">
      <h1 className="head_text text-left">
        <span className="">{type} Post</span>
      </h1>
      <p className="text-white text-left max-w-md pt-3">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 text-white relative"
      >
        <label className="flex flex-col">
          <span className="font-satoshi font-semibold text-base text-gray-200 mb-2">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="h-[200px] text-white bg-gray-900 rounded-lg p-2 px-4 shadow-lg shadow-gray-500"
          />
        </label>

        <label className="flex flex-col rounded-lg">
          <span className="font-satoshi font-semibold text-base text-gray-200 mb-2">
            Field of Prompt{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="h-[40px] text-white bg-gray-900 rounded-lg  shadow-lg shadow-gray-500 px-4 p-1"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4 ">
          <Link href="/" className="text-white text-xl shadow-lg shadow-gray-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 ... hover:shadow-xl hover:shadow-white rounded-full p-2 px-6 ">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-6 p-2 text-xl bg-gradient-to-b from-slate-800 to-slate-900 rounded-full text-primary-orange shadow-lg shadow-gray-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ... hover:shadow-xl hover:shadow-gray-700"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
                  </form>
                  </div>
          </div>
    </section>
  );
};

export default Form;
