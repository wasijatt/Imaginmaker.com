function MediaRenderer({ item }) {
    if (item.video && item.video.endsWith('.json')) {
      return <LottieRenderer item={item} />;
    }
  
    if (item.video) {
      return (
        <video
          src={item.video}
          loop
          muted
          autoPlay
          className="object-cover w-full h-full"
          playsInline
        />
      );
    }
  
    return (
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        fill
        className="object-cover transition-transform hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
      />
    );
  }
  
  