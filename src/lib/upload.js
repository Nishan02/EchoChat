// src/lib/upload.js
import { supabase } from "../config/supabase";

async function uploadImage(file) {
  const fileName = `${Date.now()}_${file.name}`;

  // make sure the bucket name below matches the bucket you created in Supabase
  const bucketName = "uploads";

  const { error } = await supabase.storage
    .from(bucketName)
    .upload(fileName, file);

  if (error) throw error;

  // Get public URL (use same bucket name)
  const { data: publicData } = supabase.storage.from(bucketName).getPublicUrl(fileName);

  return publicData.publicUrl;
}

export default uploadImage;
