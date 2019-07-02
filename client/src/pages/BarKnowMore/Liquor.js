import React, { Component } from 'react';
import '../BarKnowMore/bar.css'
import top5 from '../Images/top5.jpg';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import API from '../../lib/API';


class Liquor extends Component {
  render() {
    return (
      <>
        <div>
          <div className='container-liquor'>
            <br />
            <div className='row'>
              <div className='col-sm-4'></div>
              <div className='col-sm-4'>
                <div className="book">
                  <div className="back"></div>
                  <div className="page6"><h1>BAR Knowledge</h1><p>All about your Liquor! </p><p> Know More!</p></div>
                  <div className="page5"></div>
                  <div className="page4"></div>
                  <div className="page3"></div>
                  <div className="page2"></div>
                  <div className="page1"></div>
                  <div className="front "><h1 className='pages-header'>Liquor Links</h1>
                  </div>
                </div>
              </div>
              <div className='col-sm-4'></div>
            </div>
            <div style={{ textAlign: 'center', padding: '5%' }}>
              <div className='row'>
                <h1>Vodka</h1>
                <h6>Vodka</h6>
                <h4>Vodka is a distilled beverage composed primarily of water and ethanol, sometimes with traces of impurities and flavorings. Traditionally, vodka is made by the distillation of fermented cereal grains or potatoes, though some modern brands use other substances, such as fruits or sugar.\r\n\r\nSince the 1890s, the standard Polish, Russian, Belarusian, Ukrainian, Estonian, Latvian, Lithuanian and Czech vodkas are 40% alcohol by volume ABV (80 US proof), a percentage that is widely misattributed to Dmitri Mendeleev. The European Union has established a minimum of 37.5% ABV for any \"European vodka\" to be named as such. Products sold as \"vodka\" in the United States must have a minimum alcohol content of 40%. Even with these loose restrictions, most vodka sold contains 40% ABV. For homemade vodkas and distilled beverages referred to as \"moonshine\", see moonshine by country.\r\n\r\nVodka is traditionally drunk neat (not mixed with any water, ice, or other mixer), though it is often served chilled in the vodka belt countries (Belarus, Estonia, Finland, Iceland, Latvia, Lithuania, Norway, Poland, Russia, Sweden, Ukraine). It is also commonly used in cocktails and mixed drinks, such as the vodka martini, Cosmopolitan, vodka tonic, Screwdriver, Greyhound, Black or White Russian, Moscow Mule, and Bloody Mary.\r\n\r\nScholars debate the beginnings of vodka. It is a contentious issue because very little historical material is available. For many centuries, beverages differed significantly compared to the vodka of today, as the spirit at that time had a different flavor, color and smell, and was originally used as medicine. It contained little alcohol, an estimated maximum of about 14%, as only this amount can be attained by natural fermentation. The still, allowing for distillation (\"burning of wine\"), increased purity, and increased alcohol content, was invented in the 8th century.\r\n\r\nA common property of the vodkas produced in the United States and Europe is the extensive use of filtration prior to any additional processing including the addition of flavorants. Filtering is sometimes done in the still during distillation, as well as afterwards, where the distilled vodka is filtered through activated charcoal and other media to absorb trace amounts of substances that alter or impart off-flavors to the vodka. However, this is not the case in the traditional vodka-producing nations, so many distillers from these countries prefer to use very accurate distillation but minimal filtering, thus preserving the unique flavors and characteristics of their products.\r\n\r\nThe master distiller is in charge of distilling the vodka and directing its filtration, which includes the removal of the \"fore-shots\", \"heads\" and \"tails\". These components of the distillate contain flavor compounds such as ethyl acetate and ethyl lactate (heads) as well as the fusel oils (tails) that impact the usually desired clean taste of vodka. Through numerous rounds of distillation, or the use of a fractioning still, the taste is modified and clarity is increased. In contrast, distillery process for liquors such as whiskey, rum, and baijiu allow portions of the \"heads\" and \"tails\" to remain, giving them their unique flavors.\r\n\r\nRepeated distillation of vodka will make its ethanol level much higher than is acceptable to most end users, whether legislation determines strength limits or not. Depending on the distillation method and the technique of the stillmaster, the final filtered and distilled vodka may have as much as 95–96% ethanol. As such, most vodka is diluted with water prior to bottling.\r\n\r\nPolish distilleries make a very pure (96%, 192 proof, formerly also 98%) rectified spirit (Polish language: spirytus rektyfikowany). Technically a form of vodka, it is sold in liquor stores rather than pharmacies. Similarly, the German market often carries German, Hungarian, Polish, and Ukrainian-made varieties of vodka of 90 to 95% ABV. A Bulgarian vodka, Balkan 176°, has an 88% alcohol content. Everclear, an American brand, is also sold at 95% ABV.</h4>
              </div>
              <div className='row'>
                <h1>Bourbon</h1>
                <h6>Whisky</h6>
                <h4>Bourbon whiskey /bɜːrbən/ is a type of American whiskey: a barrel-aged distilled spirit made primarily from corn. The name is derived from the French Bourbon dynasty, although it is unclear precisely what inspired the whiskey's name (contenders include Bourbon County in Kentucky and Bourbon Street in New Orleans). Bourbon has been distilled since the 18th century. The use of the term \"bourbon\" for the whiskey has been traced to the 1820s, and the term began to be used consistently in Kentucky in the 1870s. While bourbon may be made anywhere in the United States, it is strongly associated with the American South, and with Kentucky in particular. As of 2014, the distillers' wholesale market revenue for bourbon sold within the U.S. is about $2.7 billion, and bourbon makes up about two-thirds of the $1.6 billion of U.S. exports of distilled spirits.\r\n\r\nThe origin of bourbon is not well documented. There are many conflicting legends and claims, some more credible than others. For example, the invention of bourbon is often attributed to Elijah Craig, a Baptist minister and distiller credited with many Kentucky firsts (e.g., fulling mill, paper mill, ropewalk) who is also said to have been the first to age the product in charred oak casks, a process which gives bourbon its reddish color and distinctive taste. Across the county line in Bourbon County, an early distiller named Jacob Spears is credited with being the first to label his product as Bourbon whiskey. Spears' home, Stone Castle, warehouse and spring house survive; one can drive by the Spears' home on Clay-Kiser Road.\r\n\r\nAlthough still popular and often repeated, the Craig legend is apocryphal. Similarly, the Spears story is a local favorite, rarely repeated outside the county. There likely was no single \"inventor\" of bourbon, which developed into its present form only in the late 19th century. Essentially any type of grain can be used to make whiskey, and the practice of aging whiskey and charring the barrels for better flavor had also been known in Europe for centuries. The late date of the Bourbon County etymology has led Louisville historian Michael Veach to dispute its authenticity. He proposes that the whiskey was named after Bourbon Street in New Orleans, a major port where shipments of Kentucky whiskey sold well as a cheaper alternative to French cognac.\r\n\r\nDistilling probably was brought to present-day Kentucky in the late 18th century by Scots, Scots-Irish, and other settlers (including English, Irish, Welsh, German and French) who began to farm the area in earnest. The spirit they made evolved, and became known as bourbon in the early 19th century due to its historical association with the geographic area known as Old Bourbon (this consisted of the original Bourbon County of Virginia as organized in 1785, a region that included much of today's Eastern Kentucky – including 34 of today's counties in Kentucky). This area included the current Bourbon County of Kentucky, which became a county of Kentucky when Kentucky was separated from Virginia as a new state in 1792.\r\n\r\nWhen American pioneers pushed west of the Allegheny Mountains following the American Revolution, the first counties they founded covered vast regions. One of these original, huge counties was Bourbon, established in 1785 and named after the French royal family. While this vast county was being carved into many smaller ones, early in the 19th century, many people continued to call the region Old Bourbon. Located within Old Bourbon was the principal port on the Ohio River, Maysville, Kentucky, from which whiskey and other products were shipped. \"Old Bourbon\" was stencilled on the barrels to indicate their port of origin. Old Bourbon whiskey was different because it was the first corn whiskey most people had ever tasted. In time, bourbon became the name for any corn-based whiskey.\r\n\r\nAlthough many distilleries operated in Bourbon County historically, there were no distilleries operating there between 1919, when Prohibition began in Kentucky, and late 2014, when a small distillery opened – a period of 95 years.\r\n\r\nA refinement often dubiously credited to James C. Crow was the sour mash process, by which each new fermentation is conditioned with some amount of spent mash. Spent mash is also known as spent beer, distillers' spent grain, stillage, and slop or feed mash, so named because it is used as animal feed. The acid introduced by using the sour mash controls the growth of bacteria that could taint the whiskey and creates a proper pH balance for the yeast to work.\r\n\r\nA concurrent resolution adopted by the United States Congress in 1964 declared bourbon to be a \"distinctive product of the United States\" and asked \"the appropriate agencies of the United States Government... [to] take appropriate action to prohibit importation into the United States of whiskey designated as 'Bourbon Whiskey.'\" Federal regulation now defines \"bourbon whiskey\" to only include \"bourbon\" produced in the United States.\r\n\r\nIn recent years, bourbon and Tennessee whiskey (which is sometimes regarded as a different type of spirit but which generally meets the legal requirements for being called bourbon) have enjoyed significant growth and popularity. The Distilled Spirits Council of the United States, the industry trade group, tracks sales of bourbon and Tennessee whiskey together.\r\n\r\nAccording to the Distilled Spirits Council, during 2009–14, the volume of 9-liter cases of whiskey increased by 28.5% overall. Higher-end bourbon and whiskeys experienced the greatest growth: during 2009–14 the volume of the value segment increased by 12.1%, premium by 25.8%, high-end premium by 27.8% and super-premium by 123.8%. Gross supplier revenues (including federal excise tax) for U.S. bourbon and Tennessee whiskey increased by 46.7% over the 2009–14 period, with the greatest growth coming from high-end products (18.7% growth for value, 33.6% for premium, 44.5% for high-end premium, and 137.2% for super-premium).[4] In 2014, more than 19 million nine-liter cases of bourbon and Tennessee whiskey were sold in the U.S., generating almost $2.7 billion in wholesale distillery revenue. U.S. exports of bourbon whiskey surpassed $1 billion for the first time in 2013; distillers hailed the rise of a \"golden age of Kentucky bourbon\" and predicted further growth. In 2014, it was estimated that U.S. bourbon whiskey exports surpassed $1 billion (making up the majority of the U.S. total of $1.6 billion in spirits exports). Major export markets for U.S. spirits are, in descending order: Canada, the United Kingdom, Germany, Australia and France. The largest percentage increases in U.S. exports were, in descending order: Brazil, the Dominican Republic, Bahamas, Israel and United Arab Emirates. Key elements of growth in the markets showing the largest increases have been changes of law, trade agreements, and reductions of tariffs, as well as increased consumer demand for premium-category spirits.</h4>
              </div>
              <div className='row'>
                <h1>Tequila</h1>
                <h6>Spirit</h6>
                <h4>Tequila (Spanish pronunciation: [teˈkila] (About this sound listen)) is a regionally specific distilled beverage and type of alcoholic drink made from the blue agave plant, primarily in the area surrounding the city of Tequila, 65 km (40 mi) northwest of Guadalajara, and in the highlands (Los Altos) of the central western Mexican state of Jalisco. Aside from differences in region of origin, tequila is a type of mezcal (and the regions of production of the two drinks are overlapping). The distinction in the method of production is that tequila must use only blue agave plants rather than any type of agave. Tequila is commonly served neat in Mexico and as a shot with salt and lime across the rest of the world.\r\n\r\nThe red volcanic soil in the region around the city of Tequila is particularly well suited to the growing of the blue agave, and more than 300 million of the plants are harvested there each year. Agave grows differently depending on the region. Blue agaves grown in the highlands Los Altos region are larger in size and sweeter in aroma and taste. Agaves harvested in the lowlands, on the other hand, have a more herbaceous fragrance and flavor.\r\n\r\nMexican laws state that tequila can only be produced in the state of Jalisco and limited municipalities in the states of Guanajuato, Michoacán, Nayarit, and Tamaulipas. Tequila is recognized as a Mexican designation of origin product in more than 40 countries. It is protected through NAFTA in Canada and the United States,[6] through bilateral agreements with individual countries such as Japan and Israel, and has been a protected designation of origin product in the constituent countries of the European Union since 1997.\r\n\r\nTequila contains alcohol (also known formally as ethanol) and is most often made at a 38% alcohol content (76 U.S. proof) for domestic consumption, but can be produced between 31 and 55% alcohol content (62 and 110 U.S. proof). Per U.S law, tequila must contain at least 40% alcohol (80 U.S. proof) to be sold in the United States.</h4>
              </div>
              <div className='row'>
                <h1>Rum</h1>
                <h6>Rum</h6>
                <h4>Rum is a distilled alcoholic beverage made from sugarcane byproducts, such as molasses, or directly from sugarcane juice, by a process of fermentation and distillation. The distillate, a clear liquid, is then usually aged in oak barrels.\r\n\r\nThe majority of the world's rum production occurs in the Caribbean and Latin America. Rum is also produced in Scotland, Austria, Spain, Australia, New Zealand, Fiji, the Philippines, India, Reunion Island, Mauritius, South Africa, Taiwan, Thailand, Japan, the United States, and Canada.\r\n\r\nRums are produced in various grades. Light rums are commonly used in cocktails, whereas \"golden\" and \"dark\" rums were typically consumed straight or neat, on the rocks, or used for cooking, but are now commonly consumed with mixers. Premium rums are also available, made to be consumed either straight or iced.\r\n\r\nRum plays a part in the culture of most islands of the West Indies as well as in The Maritimes and Newfoundland. This beverage has famous associations with the Royal Navy (where it was mixed with water or beer to make grog) and piracy (where it was consumed as bumbo). Rum has also served as a popular medium of economic exchange, used to help fund enterprises such as slavery (see Triangular trade), organized crime, and military insurgencies (e.g., the American Revolution and Australia's Rum Rebellion).\r\n\r\nThe precursors to rum date back to antiquity. Development of fermented drinks produced from sugarcane juice is believed to have first occurred either in ancient India or in China, and to have spread from there. An example of such an early drink is brum. Produced by the Malay people, brum dates back thousands of years. Marco Polo also recorded a 14th-century account of a \"very good wine of sugar\" that was offered to him in the area that became modern-day Iran.\r\n\r\nThe first distillation of rum took place on the sugarcane plantations of the Caribbean in the 17th century. Plantation slaves first discovered molasses, a byproduct of the sugar refining process, could be fermented into alcohol. Later, distillation of these alcoholic byproducts concentrated the alcohol and removed impurities, producing the first true rums. Tradition suggests rum first originated on the island of Barbados. However, in the decade of the 1620s, rum production was recorded in Brazil. A liquid identified as rum has been found in a tin bottle found on the Swedish warship Vasa, which sank in 1628.\r\n\r\nA 1651 document from Barbados stated, \"The chief fuddling they make in the island is Rumbullion, alias Kill-Divil, and thi is made of sugar canes distilled, a hot, hellish, and terrible liquor.</h4>
              </div>
              <div className='row'>
                <h1>Scotch</h1>
                <h6>whisky</h6>
                <h4>Scotch whisky, often simply called Scotch, is malt whisky or grain whisky made in Scotland. Scotch whisky must be made in a manner specified by law.\r\n\r\nAll Scotch whisky was originally made from malted barley. Commercial distilleries began introducing whisky made from wheat and rye in the late 18th century.[2] Scotch whisky is divided into five distinct categories: single malt Scotch whisky, single grain Scotch whisky, blended malt Scotch whisky (formerly called \"vatted malt\" or \"pure malt\"), blended grain Scotch whisky, and blended Scotch whisky.\r\n\r\nAll Scotch whisky must be aged in oak barrels for at least three years. Any age statement on a bottle of Scotch whisky, expressed in numerical form, must reflect the age of the youngest whisky used to produce that product. A whisky with an age statement is known as guaranteed-age whisky.\r\n\r\nThe first written mention of Scotch whisky is in the Exchequer Rolls of Scotland, 1495. A friar named John Cor was the distiller at Lindores Abbey in the Kingdom of Fife.\r\n\r\nMany Scotch whisky drinkers will refer to a unit for drinking as a dram.</h4>
              </div>
              <div className='row'>
                <h1>Brandy</h1>
                <h6>Spirit</h6>
                <h4>Brandy is a spirit produced by distilling wine. Brandy generally contains 35–60% alcohol by volume (70–120 US proof) and is typically taken as an after-dinner drink. Some brandies are aged in wooden casks, some are coloured with caramel colouring to imitate the effect of aging, and some brandies are produced using a combination of both aging and colouring.\r\n\r\nIn broader sense, the term \"brandy\" also denotes liquors obtained from distillation of pomace (pomace brandy) or mash or wine of any other fruit (fruit brandy). These products are also named eaux-de-vie.\r\n\r\nVarieties of wine brandy can be found across the winemaking world. Among the most renowned are Cognac and Armagnac from southwestern France.\r\n\r\nThe origins of brandy were clearly tied to the development of distillation. While the process was known in classical times, it wasn't used for significant beverage production until the 15th century.\r\n\r\nInitially wine was distilled as a preservation method and as a way to make it easier for merchants to transport. It is also thought that wine was originally distilled to lessen the tax which was assessed by volume. The intent was to add the water removed by distillation back to the brandy shortly before consumption. It was discovered that after having been stored in wooden casks, the resulting product had improved over the original distilled spirit. In addition to removing water, the distillation process led to the formation and decomposition of numerous aromatic compounds, fundamentally altering the composition of the distillate from its source. Non-volatile substances such as pigments, sugars, and salts remained behind in the still. As a result, the taste of the distillate was often quite unlike that of the original source.\r\n\r\nAs described in the 1728 edition of Cyclopaedia, the following method was used to distill brandy:\r\n\r\nA cucurbit was filled half full of the liquor from which brandy was to be drawn and then raised with a little fire until about one sixth part was distilled, or until that which falls into the receiver was entirely flammable. This liquor, distilled only once, was called spirit of wine or brandy. Purified by another distillation (or several more), this was then called spirit of wine rectified. The second distillation was made in balneo mariae and in a glass cucurbit, and the liquor was distilled to about one half the quantity. This was further rectified—as long as the operator thought necessary—to produce brandy.\r\n\r\nTo shorten these several distillations, which were long and troublesome, a chemical instrument was invented that reduced them to a single distillation. To test the purity of the rectified spirit of wine, a portion was ignited. If the entire contents were consumed by a fire without leaving any impurities behind, then the liquor was good. Another, better test involved putting a little gunpowder in the bottom of the spirit. If the gunpowder could ignite after the spirit was consumed by fire, then the liquor was good.\r\n\r\nAs most brandies have been distilled from grapes, the regions of the world producing excellent brandies have roughly paralleled those areas producing grapes for viniculture. At the end of the 19th century, the western European markets, including by extension their overseas empires, were dominated by French and Spanish brandies and eastern Europe was dominated by brandies from the Black Sea region, including Bulgaria, the Crimea, and Georgia. In 1884, David Sarajishvili founded his brandy factory in Tbilisi, Georgia, a crossroads for Turkish, Central Asian, and Persian trade routes and a part of the Russian Empire at the time. Armenian and Georgian brandies, called cognacs in the era, were considered some of the best in the world and often beat their French competitors at the International Expositions in Paris and Brussels in the early 1900s.[citation needed] The storehouses of the Romanov Court in St. Petersburg were regarded as the largest collections of cognacs and wines in the world with much of it from the Transcaucasus region of Georgia. During the October Revolution of 1917, upon the storming of the Winter Palace, the Bolshevik Revolution actually paused for a week or so as the participants gorged on the substantial stores of cognac and wines. The Russian market was always a huge brandy-consuming region in which home-grown varieties were common but much of it was imported. The patterns of bottles followed that of the western European norm. Throughout the Soviet era, the production of brandy was a source of pride for the communist regime as they continued to produce some excellent varieties, especially the most famous Jubilee Brandies of 1967, 1977, and 1987.[citation needed] Remaining bottles of these productions are highly sought after, not simply for their quality, but for their historical significance.</h4>
              </div>
              <div className='row'>
                <h1>Champagne</h1>
                <h6>Wine</h6>
                <h4>Champagne (French: [ʃɑ̃.paɲ]) is a sparkling wine and type of alcoholic drink produced from grapes grown in the Champagne region of France following rules that demand, among other things, secondary fermentation of the wine in the bottle to create carbonation, specific vineyard practices, sourcing of grapes exclusively from specific parcels in the Champagne appellation and specific pressing regimes unique to the region.[1] It contains the drug alcohol (also known formally as ethanol), and is used recreationally. Some use the term Champagne as a generic term for sparkling wine, but in many countries, it is illegal to label any product Champagne unless it both comes from the Champagne region and is produced under the rules of the appellation.\r\n\r\nThe primary grapes used in the production of Champagne are black Pinot noir and Pinot Meunier but also white Chardonnay. Champagne appellation law only allows grapes grown according to appellation rules in specifically designated plots within the appellation to be used in the production of champagne.\r\n\r\nChampagne became associated with royalty in the 17th, 18th, and 19th centuries. The leading manufacturers made efforts to associate their Champagnes with nobility and royalty through advertising and packaging, which led to popularity among the emerging middle class.</h4>
              </div>
              <div className='row'>
                <h1>Port</h1>
                <h6>Fortified Wine</h6>
                <h4>Port wine (also known as vinho do Porto, Portuguese pronunciation: [ˌviɲuduˈpoɾtu], Porto, and usually simply port) is a Portuguese fortified wine produced exclusively in the Douro Valley in the northern provinces of Portugal. It is typically a sweet, red wine, often served as a dessert wine, though it also comes in dry, semi-dry, and white varieties. Fortified wines in the style of port are also produced outside Portugal, most notably in Australia, France, South Africa, Canada, India, Argentina, and the United States. Under European Union Protected Designation of Origin guidelines, only the product from Portugal may be labelled as port or Porto. In the United States, wines labelled \"port\" may come from anywhere in the world, while the names \"Oporto\", \"Porto\", and \"Vinho do Porto\" have been recognised as foreign, non-generic names for Port wines originating in Portugal.</h4>
              </div>
              <div className='row'>
                <h1>Sherry</h1>
                <h6>Fortified Wine</h6>
                <h4>Sherry (English: /ˈʃɛri/, Spanish: Jerez [xeˈɾeθ] or [xeˈɾes]) is a fortified wine made from white grapes that are grown near the city of Jerez de la Frontera in Andalusia, Spain. Sherry is produced in a variety of styles made primarily from the Palomino grape, ranging from light versions similar to white table wines, such as Manzanilla and Fino, to darker and heavier versions that have been allowed to oxidise as they age in barrel, such as Amontillado and Oloroso. Sweet dessert wines are also made from Pedro Ximenez or Moscatel grapes, and are sometimes blended with Palomino-based Sherries.\r\n\r\nThe word \"Sherry\" is an anglicisation of Xeres (Jerez). Sherry was previously known as sack, from the Spanish saca, meaning \"extraction\" from the solera. In Europe, \"Sherry\" has protected designation of origin status, and under Spanish law, all wine labelled as \"Sherry\" must legally come from the Sherry Triangle, an area in the province of Cádiz between Jerez de la Frontera, Sanlúcar de Barrameda, and El Puerto de Santa María. In 1933 the Jerez Denominación de Origen was the first Spanish denominación to be officially recognised in this way, officially named D.O. Jerez-Xeres-Sherry and sharing the same governing council as D.O. Manzanilla Sanlúcar de Barrameda.\r\n\r\nAfter fermentation is complete, the base wines are fortified with grape spirit in order to increase their final alcohol content. Wines classified as suitable for aging as Fino and Manzanilla are fortified until they reach a total alcohol content of 15.5 per cent by volume. As they age in barrel, they develop a layer of flor—a yeast-like growth that helps protect the wine from excessive oxidation. Those wines that are classified to undergo aging as Oloroso are fortified to reach an alcohol content of at least 17 per cent. They do not develop flor and so oxidise slightly as they age, giving them a darker colour. Because the fortification takes place after fermentation, most sherries are initially dry, with any sweetness being added later. In contrast, port wine is fortified halfway through its fermentation, which stops the process so that not all of the sugar is turned into alcohol.\r\n\r\nWines from different years are aged and blended using a solera system before bottling, so that bottles of sherry will not usually carry a specific vintage year and can contain a small proportion of very old wine. Sherry is regarded by many wine writers as \"underappreciated\" and a \"neglected wine treasure\".</h4>
              </div>
              <div className='row'>
                <h1>Vermouth</h1>
                <h6>Fortified Wine</h6>
                <h4>Vermouth (/vərˈmuːθ/ ver-MOOTH; also UK: /ˈvɜːrməθ/;[1][2]) is an aromatized, fortified wine flavored with various botanicals (roots, barks, flowers, seeds, herbs, and spices).\r\n\r\nThe modern versions of the beverage were first produced in the mid to late 18th century in Turin, Italy. While vermouth was traditionally used for medicinal purposes, its true claim to fame is as an aperitif, with fashionable cafes in Turin serving it to guests around the clock. However, in the late 19th century it became popular with bartenders as a key ingredient in many classic cocktails that have survived to date, such as the Martini, the Manhattan, the Rob Roy, and the Negroni. In addition to being consumed as an aperitif or cocktail ingredient, vermouth is sometimes used as an alternative white wine in cooking.\r\n\r\nHistorically, there have been two main types of vermouth: sweet and dry. Responding to demand and competition, vermouth manufacturers have created additional styles, including extra-dry white, sweet white (bianco), red, amber (ambre or rosso), and rosé. Vermouth is produced by starting with a base of a neutral grape wine or unfermented wine must. Each manufacturer adds additional alcohol and a proprietary mixture of dry ingredients, consisting of aromatic herbs, roots, and barks, to the base wine, base wine plus spirit or spirit only – which may be redistilled before adding to the wine or unfermented wine must. After the wine is aromatized and fortified, the vermouth is sweetened with either cane sugar or caramelized sugar, depending on the style. Italian and French companies produce most of the vermouth consumed throughout the world, although the United States and the United Kingdom are also producers.</h4>
              </div>
              <div className='row'>
                <h1>Beer</h1>
                <h6>Beer</h6>
                <h4>Beer is the oldest and most widely consumed alcoholic drink in the world, and the third most popular drink overall after water and tea.[5] Beer is brewed from cereal grains — most commonly from malted barley, though wheat, maize (corn), and rice are also used. During the brewing process, fermentation of the starch sugars in the wort produces ethanol and carbonation in the resulting beer. Most modern beer is brewed with hops, which add bitterness and other flavours and act as a natural preservative and stabilizing agent. Other flavouring agents such as gruit, herbs, or fruits may be included or used instead of hops. In commercial brewing, the natural carbonation effect is often removed during processing and replaced with forced carbonation.\r\n\r\nSome of humanity's earliest known writings refer to the production and distribution of beer: the Code of Hammurabi included laws regulating beer and beer parlours, and \"The Hymn to Ninkasi\", a prayer to the Mesopotamian goddess of beer, served as both a prayer and as a method of remembering the recipe for beer in a culture with few literate people.\r\n\r\nBeer is distributed in bottles and cans and is also commonly available on draught, particularly in pubs and bars. The brewing industry is a global business, consisting of several dominant multinational companies and many thousands of smaller producers ranging from brewpubs to regional breweries. The strength of modern beer is usually around 4% to 6% alcohol by volume (abv), although it may vary between 0.5% and 20%, with some breweries creating examples of 40% abv and above.[11] Beer forms part of the culture of many nations and is associated with social traditions such as beer festivals as well as a rich pub culture involving activities like pub crawling and pub games such as bar billiards.\r\n\r\nVarious legal definitions of beer exist in different countries. Historically, the most famous of these was the Reinheitsgebot, which applied to parts of the Holy Roman Empire and Germany and required beer to be made from only water, hops, and barley. Today in Canada, the Canadian Government’s Food and Drug Regulations state that beer must have alcohol content that ranges from 1.1% to 8.6%, though it also includes a stipulation that it could be greater than 8.6% and labeled accordingly. Beer in South Korea must have less than 25% ABV, which means that it has to be 25 mL of alcohol or less per 100 mL of solution and can be considered ‘lite’ only if it has less than 30 kcal per 100ml. Additionally, beer in South Korea must use only water, hops, and starches (wheat, rice, barley, corn, or potato) as ingredients in the brewing process.[13] In Singapore, beer must have at minimum 1.0% alcohol by volume concentration at 20 °C. It is often brewed from a mixture of grains like malt, sugars or its equivalent, and hops or other vegetables.</h4>
              </div>
              <div className='row'>
                <h1>Blue Curacao</h1>
                <h6>Liquor</h6>
                <h4>Curaçao (/ˈkjʊərəsaʊ/) is a liqueur flavored with the dried peel of the Laraha citrus fruit, grown on the island of Curaçao.\r\n\r\nAn official Curaçao liqueur has to be made with the dried peels of the \"Laraha\". Laraha is a bitter orange native of Curaçao with the Latin name: \"Citrus Aurantium Currasuviensis\", meaning \"Golden Orange of Curaçao\". Spanish explorers brought the sweet Valencia orange to the island in 1527, [2] but the nutrient-poor soil and arid climate of Curaçao proved unsuitable to Valencia cultivation, resulting in small, bitter fruit. Although the bitter flesh of the Laraha is hardly edible, the peels are aromatic and flavorful, maintaining much of the essence of the Valencia orange.\r\n\r\nThere are no definite facts that points out who and when the first Curaçao Liqueur was developed. The Lucas Bols distillery, founded in 1575 in Amsterdam, maintains that Lucas Bols (1652–1719) already developed a Laraha-based liqueur. The Dutch West Indies Company had taken possession of Curaçao in 1634 and Bols had shares in both the West and East India Companies to guarantee the cheap supply of spices for their distilled drinks. After the discovery that an aromatic oil could be extracted from the unripe peel of the otherwise useless bitter oranges, Bols had this oil exported back to Amsterdam to develop a liqueur similar to current day Curaçao. Bols tended to add an \"element of alchemical mystery\" to his products, explaining the unlikely addition of a blue coloring. In the past, the liqueur also had the name Crème de Ciel (\"cream of heaven\"), presumably for its blue color.\r\n\r\nAlternatively, the Senior & Co, a company that originates from Curaçao, are to this day the only company that always produced their liqueur with the peels of the Laraha. The Jewish family, Senior and Chumacairo, started selling their liqueur in 1896 in their pharmacy at small quantities. In 1947 they bought the Landhuis (Dutch for \"country manor\") Chobolobo in Willemstad, where the distillery has since been housed. As this company is the only one who uses laraha fruit from Curaçao, it has been permitted to put the word \"genuine\" on its labels.</h4>
              </div>
              <div className='row'>
                <h1>Cachaça</h1>
                <h6>Spirit</h6>
                <h4>Cachaça (Portuguese pronunciation: [kaˈʃasɐ]) is a distilled spirit made from fermented sugarcane juice. Also known as aguardente, pinga, caninha and other names, it is the most popular distilled alcoholic beverage in Brazil. Outside Brazil, cachaça is used almost exclusively as an ingredient in tropical drinks, with the caipirinha being the most famous cocktail.\r\n\r\nSugar production was mostly switched from the Madeira islands to Brazil by the Portuguese in the 16th century. In Madeira, aguardente de cana is made by distilling sugar cane liquors and the pot stills from Madeira were brought to Brazil to make what today is also called cachaça.\r\n\r\nThe process dates from 1532, when one of the Portuguese colonisers brought the first cuttings of sugar cane to Brazil from Madeira. Cachaça is mostly produced in Brazil, where, according to 2007 figures, 1,500,000,000 litres (396,000,000 US gal; 330,000,000 imp gal) are consumed annually, compared with 15,000,000 litres (3,960,000 US gal; 3,300,000 imp gal) outside the country. It is typically between 38% and 48% alcohol by volume. When homemade, it can be as strong as the distiller wants. Up to six grams per litre of sugar may be added.\r\n\r\nFigures from 2003 indicate 1.3 billion litres of cachaça are produced each year; only 1% of this is exported (mainly to Germany).\r\n\r\nCachaça, like rum, has two varieties: unaged (Portuguese: branca, \"white\" or prata, \"silver\") and aged (amarela, \"yellow\" or ouro, \"gold\"). White cachaça is usually bottled immediately after distillation and tends to be cheaper (some producers age it for up to 12 months in wooden barrels to achieve a smoother blend). It is often used as an ingredient in caipirinha and other beverages. Dark cachaça, usually seen as the \"premium\" variety, is aged in wood barrels and is meant to be drunk straight (it is usually aged for up to 3 years though some \"ultra premium\" cachaças have been aged for up to 15 years). Its flavour is influenced by the type of wood the barrel is made from.\r\n\r\nThere are very important regions in Brazil where fine pot still cachaça is produced such as Chã Grande in Pernambuco state, Salinas in Minas Gerais state, Paraty in Rio de Janeiro state, Monte Alegre do Sul in São Paulo state and Abaíra in Bahia state. Nowadays, producers of cachaça can be found in most Brazilian regions and in 2011 there were over 40,000 of them.</h4>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Liquor;
// class Liquor extends Component {
//   render() {
//     return (
//       <>
//         <div>
//           <div className='container-liquor'>
//             <h2 className='pages-header'>Liquor Links</h2>
//             <br />
//             <div className='row'>
//               <div className='col-4'>
//                 <div className="book">
//                   <div className="back"></div>
//                   <div className="page6">here</div>
//                   <div className="page5">there</div>
//                   <div className="page4"></div>
//                   <div className="page3"></div>
//                   <div className="page2"></div>
//                   <div className="page1"></div>
//                   <div className="front"><h3>Liquor</h3></div>
//                 </div>
//               </div>
//               <div className='col-4'>
//                 <div className="book">
//                   <div className="back"></div>
//                   <div className="page6">here</div>
//                   <div className="page5">there</div>
//                   <div className="page4"></div>
//                   <div className="page3"></div>
//                   <div className="page2"></div>
//                   <div className="page1"></div>
//                   <div className="front"><h3>Liquor</h3></div>
//                 </div>
//               </div>
//               <div className='col-4'>
//                 <div className="book">
//                   <div className="back"></div>
//                   <div className="page6">here</div>
//                   <div className="page5">there</div>
//                   <div className="page4"></div>
//                   <div className="page3"></div>
//                   <div className="page2"></div>
//                   <div className="page1"></div>
//                   <div className="front"><h3>Liquor</h3></div>
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-4'>
//                 <div className="book">
//                   <div className="back"></div>
//                   <div className="page6">here</div>
//                   <div className="page5">there</div>
//                   <div className="page4"></div>
//                   <div className="page3"></div>
//                   <div className="page2"></div>
//                   <div className="page1"></div>
//                   <div className="front"><h3>Liquor</h3></div>
//                 </div>
//               </div>
//               <div className='col-4'>
//                 <div className="book">
//                   <div className="back"></div>
//                   <div className="page6">here</div>
//                   <div className="page5">there</div>
//                   <div className="page4"></div>
//                   <div className="page3"></div>
//                   <div className="page2"></div>
//                   <div className="page1"></div>
//                   <div className="front"><h3>Liquor</h3></div>
//                 </div>
//               </div>
//               <div className='col-4'>
//                 <div className="book">
//                   <div className="back"></div>
//                   <div className="page6">here</div>
//                   <div className="page5">there</div>
//                   <div className="page4"></div>
//                   <div className="page3"></div>
//                   <div className="page2"></div>
//                   <div className="page1"></div>
//                   <div className="front"><h3>Liquor</h3></div>
//                 </div>
//               </div>
//             </div>
//             <div className='row'>
//               <div className='col-4'>
//                 <div className="book">
//                   <div className="back"></div>
//                   <div className="page6">here</div>
//                   <div className="page5">there</div>
//                   <div className="page4"></div>
//                   <div className="page3"></div>
//                   <div className="page2"></div>
//                   <div className="page1"></div>
//                   <div className="front"><h3>Liquor</h3></div>
//                 </div>
//               </div>
//               <div className='col-4'>
//                 <div className="book">
//                   <div className="back"></div>
//                   <div className="page6">here</div>
//                   <div className="page5">there</div>
//                   <div className="page4"></div>
//                   <div className="page3"></div>
//                   <div className="page2"></div>
//                   <div className="page1"></div>
//                   <div className="front"><h3>Liquor</h3></div>
//                 </div>
//               </div>
//               <div className='col-4'>
//                 <div className="book">
//                   <div className="back"></div>
//                   <div className="page6">here</div>
//                   <div className="page5">there</div>
//                   <div className="page4"></div>
//                   <div className="page3"></div>
//                   <div className="page2"></div>
//                   <div className="page1"></div>
//                   <div className="front"><h3>Liquor</h3></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Liquor;
