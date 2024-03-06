import { FileOpen as FileOpenIcon } from '@mui/icons-material';
import { transformImage } from '../../lib/Features';

const RenderAttachment = (file, url: string) => {
  switch (file) {
    case 'video':
      return <video src={url} preload='none' width={'200px'} controls />;

    case 'audio':
      return <audio src={url} preload='none' controls />;

    case 'image':
      return (
        <img
          src={transformImage(url)}
          alt='Attachment'
          width={'200px'}
          height={'150px'}
          style={{
            objectFit: 'contain',
          }}
        />
      );

    default:
      return <FileOpenIcon />;
  }
};

export default RenderAttachment;
