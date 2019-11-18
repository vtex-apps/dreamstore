import {
  ProductSummaryAddToListButton,
  ProductSummaryImage,
  ProductSummarySpecificationBadges,
  ProductSummaryName,
  ProductSummarySpace,
  ProductSummaryPrice,
  ProductSummary,
  ProductSummaryBuyButton,
} from 'vtex.product-summary'
import { StackLayout } from 'vtex.stack-layout'
import { ProductRatingInline } from 'vtex.product-review-interfaces'
import { ProductIdentifier } from 'vtex.product-identifier'

export default function ProductSummaryShelf() {
  return (
    <ProductSummary.Shelf __id="">
      <ProductSummaryAddToListButton __id={null} />
      <StackLayout __id="prodsum">
        <ProductSummaryImage __id={null} />
        <ProductSummarySpecificationBadges
          __id=""
          specificationGroupName="Group"
          specificationName="On Sale"
          visibleWhen="True"
          displayValue="SPECIFICATION_NAME"
        />
      </StackLayout>
      <ProductSummaryName __id={null} />
      <ProductRatingInline __id={null} />
      <ProductSummarySpace __id={null} />
      <ProductSummaryPrice __id={null} />
      <ProductIdentifier.Summary __id={null} />
      <ProductSummaryBuyButton __id={null} />
    </ProductSummary.Shelf>
  )
}
