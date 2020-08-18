import mongoose from 'mongoose';
import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose'

class ProductClass {
    @prop({ auto: true })
    _id!: mongoose.Types.ObjectId

    @prop({ required: true })
    feature!: boolean;

    @prop({ required: true })
    title!: string

    @prop({ required: true })
    description!: string;

    @prop({ required: true })
    price!: number;

    @prop({ required: true })
    category!: string;

    @prop({ required: true })
    sale!: boolean;

    @prop({ required: true })
    imgUrl!: string;

    @prop({ required: true })
    inventory!: number;
}

@modelOptions({
    schemaOptions: {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        versionKey: false,
    },
})
class StoreClass {
    @prop({ auto: true })
    _id!: mongoose.Types.ObjectId

    @prop({ required: true, unique: true })
    name!: string;

    @prop({ required: true })
    display!: boolean;

    @prop({ required: true })
    featureCaption!: string;

    @prop({ type: ProductClass })
    products!: ProductClass[]

}

const Store = getModelForClass(StoreClass, {
    schemaOptions: { collection: 'stores' }
});

export default Store;