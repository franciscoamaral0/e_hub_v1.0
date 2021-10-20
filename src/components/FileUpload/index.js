import {
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";


import { useDropzone } from "react-dropzone";
import { DeleteForever } from "@material-ui/icons";

import useStyle from "./FileUpload.styles";

const FileUpload = ({files, errors, touched, setFieldValue}) => {
  const classes= useStyle()



  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFile) => {
      console.log(acceptedFile);
      const newFiles = acceptedFile.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file)
      }));
      setFieldValue("files", [...files, ...newFiles]);
    },
  });

  const handleRemoveFile = (fileName) => {
    console.log(fileName,files)
    const newFileState = files.filter((file) => file.name !== fileName);
    setFieldValue("files", newFileState);
  };
  return (
    <>
      <Typography
        component="h6"
        variant="h6"
        color={errors && touched ? "error" : "textPrimary"}
      >
        Imagens
      </Typography>
      <Typography
        component="div"
        variant="body2"
        color={errors && touched ? "error" : "textPrimary"}
      >
        A primeira Imagem é a foto principal do seu anúncio
      </Typography>
      {errors && touched ? (
        <Typography variant="body2" color="error">
          {errors}
        </Typography>
      ) : (
        null
      )}
      <Box className={classes.thumbsContainer}>
        <Box className={classes.dropZone} {...getRootProps()}>
          <input name="files" {...getInputProps()} />
          <Typography
            variant="body2"
            color={errors && touched ? "error" : "textPrimary"}
          >
            Clique para adicionar ou arraste a imagem aqui.
          </Typography>
        </Box>

        {files.map((file, index) => (
          <Box
            key={file.name}
            className={classes.thumb}
            style={{ backgroundImage: `url(${file.preview})` }}
          >
            {index === 0 ? (
              <Box className={classes.mainImage}>
                <Typography variant="body2" color="textPrimary">
                  Principal
                </Typography>
              </Box>
            ) : null}

            <Box className={classes.mask}>
              <IconButton
                color="secondary"
                onClick={() => handleRemoveFile(file.name)}
              >
                <DeleteForever fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default FileUpload;