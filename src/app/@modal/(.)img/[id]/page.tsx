import { Modal } from "./modal";
import FullPageImageView from "~/common/full-image-page";

export default  async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {

  const idAsNumber = Number(photoId);
  if(Number.isNaN(idAsNumber))throw new Error("Invalid Photo Id");

  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}
