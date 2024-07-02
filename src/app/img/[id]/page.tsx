import FullPageImageView from "~/common/full-image-page";
import { Modal } from "~/app/@modal/(.)img/[id]/modal";

export default  async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {

  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}
