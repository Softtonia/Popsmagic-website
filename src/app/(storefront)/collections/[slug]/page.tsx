interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CollectionDetailPage({ params }: CollectionPageProps) {
  const { slug } = await params;

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Collection: {slug}</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Products featured in the {slug} collection.
      </p>
    </div>
  );
}
