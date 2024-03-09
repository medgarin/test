import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { Phone, ContactMail } from "@material-ui/icons";
import * as yup from "yup";

export interface IContactType {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  text: string;
  leyend: string;
}

export const contactTypes: IContactType[] = [
  { Icon: Phone, text: "+52 618 110 14 77", leyend: "Llamame" },
  {
    Icon: ContactMail,
    text: "herrera.clip@gmail.com",
    leyend: "Enviame un correo",
  },
];

export interface IForm {
  name: string;
  contact: string;
  message: string;
}
export const initialValues: IForm = {
  name: "",
  contact: "",
  message: "",
};

export const formSchema = yup.object().shape({
  name: yup.string().trim().required(),
  contact: yup.string().trim().required(),
  message: yup.string().trim().required(),
});

