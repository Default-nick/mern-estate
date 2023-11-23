import { FaLinkedin, FaGithub, FaReact, FaJsSquare } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import {
  SiTailwindcss,
  SiJsonwebtokens,
  SiRedux,
  SiReactrouter,
  SiExpress,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About MERN Estate
      </h1>
      <p className="mb-4 text-slate-700">
        MERN Estate is a website created solely and exclusively for educational
        purposes.
        <br />
        No information or images used portray reality. You can find the
        repository of this project at this{" "}
        <a
          className="text-blue-700 font-semibold underline"
          href="https://github.com/Default-nick/mern-estate"
          target="_blank"
          rel="noreferrer"
          title="MERN Estate repo"
        >
          link
        </a>
        .
      </p>
      <p className="text-slate-700 font-semibold">
        This project used the following technologies:
      </p>
      <div className="mx-auto flex flex-wrap gap-2 my-2">
        <button className="bg-slate-300 hover:bg-slate-200 p-2 border rounded-md flex flex-col items-center justify-center">
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            title="React"
          >
            <FaReact className="w-5 h-5 hover:opacity-70" />
          </a>
        </button>
        <button className="bg-slate-300 hover:bg-slate-200 p-2 border rounded-md flex flex-col items-center justify-center">
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
            title="JavaScript"
          >
            <FaJsSquare className="w-5 h-5 hover:opacity-70" />
          </a>
        </button>
        <button className="bg-slate-300 hover:bg-slate-200 p-2 border rounded-md flex flex-col items-center justify-center">
          <a
            href="https://tailwindcss.com/docs/installation"
            target="_blank"
            rel="noreferrer"
            title="TailwindCSS"
          >
            <SiTailwindcss className="w-5 h-5 hover:opacity-70" />
          </a>
        </button>
        <button className="bg-slate-300 hover:bg-slate-200 p-2 border rounded-md flex flex-col items-center justify-center">
          <a
            href="https://jwt.io/introduction"
            target="_blank"
            rel="noreferrer"
            title="JSON Web Tokens"
          >
            <SiJsonwebtokens className="w-5 h-5 hover:opacity-70" />
          </a>
        </button>
        <button className="bg-slate-300 hover:bg-slate-200 p-2 border rounded-md flex flex-col items-center justify-center">
          <a
            href="https://redux-toolkit.js.org/introduction/getting-started"
            target="_blank"
            rel="noreferrer"
            title="Redux Toolkit"
          >
            <SiRedux className="w-5 h-5 hover:opacity-70" />
          </a>
        </button>
        <button className="bg-slate-300 hover:bg-slate-200 p-2 border rounded-md flex flex-col items-center justify-center">
          <a
            href="https://reactrouter.com/en/main/start/tutorial"
            target="_blank"
            rel="noreferrer"
            title="React Router"
          >
            <SiReactrouter className="w-5 h-5 hover:opacity-70" />
          </a>
        </button>
        <button className="bg-slate-300 hover:bg-slate-200 p-2 border rounded-md flex flex-col items-center justify-center">
          <a
            href="https://expressjs.com/pt-br/"
            target="_blank"
            rel="noreferrer"
            title="Express"
          >
            <SiExpress className="w-5 h-5 hover:opacity-70" />
          </a>
        </button>
        <button className="bg-slate-300 hover:bg-slate-200 p-2 border rounded-md flex flex-col items-center justify-center">
          <a
            href="https://firebase.google.com/docs"
            target="_blank"
            rel="noreferrer"
            title="Firebase"
          >
            <SiFirebase className="w-5 h-5 hover:opacity-70" />
          </a>
        </button>
        <button className="bg-slate-300 hover:bg-slate-200 p-2 border rounded-md flex flex-col items-center justify-center">
          <a
            href="https://nodejs.org/en/docs"
            target="_blank"
            rel="noreferrer"
            title="NodeJS"
          >
            <SiNodedotjs className="w-5 h-5 hover:opacity-70" />
          </a>
        </button>
        <button className="bg-slate-300 hover:bg-slate-200 p-2 border rounded-md flex flex-col items-center justify-center">
          <a
            href="https://www.mongodb.com/docs/"
            target="_blank"
            rel="noreferrer"
            title="MongoDB"
          >
            <SiMongodb className="w-5 h-5 hover:opacity-70" />
          </a>
        </button>
      </div>
      <br />
      <p className="text-slate-700 font-semibold">My contacts:</p>
      <div className="mx-auto flex flex-wrap gap-2">
        <button className="bg-slate-300 hover:bg-slate-200 p-2 border rounded-lg flex items-center justify-center">
          <a
            href="https://www.linkedin.com/in/le-alves/"
            rel="noreferrer"
            target="_blank"
            title="LinkedIn"
          >
            <FaLinkedin className="w-10 h-10 hover:opacity-70" />
          </a>
        </button>
        <button className="bg-slate-300 hover:bg-slate-200 p-2 border rounded-lg flex items-center justify-center">
          <a
            href="https://github.com/Default-nick"
            rel="noreferrer"
            target="_blank"
            title="GitHub"
          >
            <FaGithub className="w-10 h-10 hover:opacity-70" />
          </a>
        </button>
        <button className="bg-slate-300 hover:bg-slate-200 p-2 border rounded-lg flex items-center justify-center">
          <a
            href="mailto:lalvesevangelista@gmail.com"
            rel="noreferrer"
            target="_blank"
            title="E-mail"
          >
            <LuMail className="w-10 h-10 hover:opacity-70" />
          </a>
        </button>
      </div>
      <p className="my-4 text-slate-700">Thanks for the visit!</p>
    </div>
  );
}
