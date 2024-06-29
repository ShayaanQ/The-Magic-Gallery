import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/11c72a1b-e0dc-4574-81da-55c70cc7d74d-ajib30.jpeg",
  "https://utfs.io/f/402eb440-458f-46a7-96ce-e6c6945244c1-jlo1cb.jpeg",
  "https://utfs.io/f/eb73107e-a2bd-4613-ab5b-6c7444d4f762-o4j9cp.png",

];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));



export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url}/>
          </div>
      ))}
      </div>
    </main>
  );
}