import { type SchemaTypeDefinition } from 'sanity'
import {experience} from './experience'
import {skill} from './skill'
import {pageInfo} from './pageInfo'
import {social} from './social'
import {project} from './project'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ experience, skill, pageInfo, social, project],
}
