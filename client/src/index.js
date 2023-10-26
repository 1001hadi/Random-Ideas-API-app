import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/modal";
import IdeaForm from "./components/ideaForm";
import IdeaList from "./components/ideaList";
import "./css/style.css";

const modal = new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
const ideaList = new IdeaList();
ideaList.render();
