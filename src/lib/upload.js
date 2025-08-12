import { supabase } from "../config/supabase"

async function uploadImage(file) {
  const fileName = `${Date.now()}_${file.name}`
  const { data, error } = await supabase.storage
    .from('uploads') // bucket name
    .upload(fileName, file)

  if (error) throw error

  // Get public URL
  const { data: publicData } = supabase.storage.from('images').getPublicUrl(fileName)
  return publicData.publicUrl
}


export default upload;

