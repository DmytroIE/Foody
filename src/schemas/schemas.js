import { schema } from 'normalizr';

export const menuCategorySchema = new schema.Entity('menuCategories');
export const menuItemSchema = new schema.Entity('menuItems', {
  category: menuCategorySchema,
});
