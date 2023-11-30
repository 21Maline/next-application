import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

import {schemaTypes} from './schemas'

const projectId=process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!; 
const dataset=process.env.NEXT_PUBLIC_SANITY_DATASET!;
export default defineConfig({ 
  basePath:"/studio",
  name: "MM_Studio",
  title: "MM Studio",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
function visionTool(): any {
  throw new Error('Function not implemented.')
}

