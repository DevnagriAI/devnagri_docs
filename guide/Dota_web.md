# DOTA Web

Devnagri On the Air is a platform that translates your website on the fly.

The platform enables your website to go multilingual in minutes with minimal effort. You don't need to change anything at the code or infrastructure level. Its just a plug and play solution to go multilingual.

Devnagri On The Air makes your multilingual journey quick and easy.

![DOTA](./images/DOTA_Web/DotaWebIntro.png)

## Login Page

The user must input the login credentials, then click on the "Log In" button.

![signin](./images/CaptchaLogin.png)

## User Dashboard

Once logged in, the user will be directed to their dashboard, where they can opt to initiate a new Website Translation order.

![dashboard](./images/Dashboard11.png)

## New Order on DOTA

1. Enter the URL of the website which needs to be localised.
2. Select the pricing plan.
3. Select the duration.

![neworder](./images/DOTA_Web/NewDOTAOrder.png)

## Order Summary
On the Order Summary page, a user can select the languages for website localization and specify the industry to tailor translations for industry-specific terms. Please do note that you can add languages later on as well. <br>
![order_summary](./images/DOTA_Web/SummaryUpdate.png)

## Payment

If user has existing balance in their wallet, the order will be confirmed, and they will be redirected to the "Verify Website Ownership" page. Alternatively, if the user does not have balance in their wallet, they will be redirected to the payment gateway, where they can select a preferred payment method to complete the transaction and confirm the order.

![payment](./images/DOTA_Web/Payment.png)

After the order is confirmed, the user will be redirected to the "Verify Website Ownership" page.
<!-- ![l](./images/a1.png) -->

## Verify Website Ownership

Sign in to your domain name service provider and add the generated TXT record generated for your domain into your [DNS Configuration](https://www.youtube.com/watch?v=K1B5UwSBwko).

![domain_verify](./images/domain_verify.png)

Click on **verify** and then it will take up sometime to verify the txt record.

## Select approach

1. Subdomain (hi.example.com)
2. Subdirectory (example.com/hi)
3. Live JS (example.com)

![setup](./images/DOTA_Web/ApprochUpdate.png)

### 1. Subdomain

Step 1.

![subdomain_step1](./images/DOTA_Web/SubdomainStep1.png)

**a.** Please enter the CNAME record generated for the website URL in your DNS.

Note: If you are using CDN, you need to disable proxy setting on Cloudflare.

If you are using GoDaddy or Cloudflare you can see how to do it in the videos below:

[GoDaddy](https://www.youtube.com/watch?v=M47Lpp5f9lE)
<br>
[Cloudflare](https://www.youtube.com/watch?v=sCuEqr4MHKM)

Click on **Verify CNAME** and post verification both the red crosses will turn into green ticks after a few minutes.

Devnagri is currently initializing your subdomains and generating SSL certificates for the subdomains. Please be patient while the process completes.

Step 2.

![subdomain_step2](./images/DOTA_Web/SubdomainStep2.png)

It is recommended that you include the Javascript code snippet immediately before your closing body tag. This will enable the language switcher to appear on your source website, as well as add hreflang tags to notify Google of the different variations of the same page and prioritize indexing of these pages. This is particularly beneficial for your SEO efforts.

Once its done, you can click on **Finish** and you're done!

Step 3.

![subdomain_step3](./images/DOTA_Web/SubdomainStep3.png)

Your project has been created. Now, you can go to DOTA dashboard by clicking on **Go to my dashboard**.

### 2. Subdirectory

This approach involves creating a new subdirectory for each language version of your website. For example, if your main website is www.example.com, the Hindi version could be www.example.com/hi or www.example.com/hindi.

Step 1.

![subdirectory_step1](./images/DOTA_Web/SubDirectory1.png)

It is recommended to include Apache/Ngnix code snippet to your website server configuration.

![subdirectory_step1](./images/DOTA_Web/SubDirectory2.png)

Once the mapping has been done click on Verify & Next. In order to verify server configuration for subdirectory approach.

Step 2.

![subdirectory_step1](./images/DOTA_Web/SubDirectory3.png)

The final step is to include the JS code, which simplifies the creation of the language button and also adds hreflang tags to your website.

It is recommended that you include the Javascript code snippet immediately before your closing body tag.This will enable the language switcher to appear on your website.

Once its done, you can click on **Finish** and you're done!

### 3. Live JS

Step 1.

![liveJS1](./images/DOTA_Web/LiveJS1.png)

You're welcome to adhere to the guidelines and include the Javascript code snippet immediately before your closing body tag. This will enable the language switcher to appear on your website.

Step 2.

![liveJS2](./images/DOTA_Web/LiveJS2.png)

Your project has been created. Now, you can go to DOTA dashboard by clicking on **Go to my dashboard**.

<!-- ## DOTA Dashboard  

After confirming the order all the URLs will the not download automatically user has to click on add urls.

![urln](./images/a12.png) -->

## DOTA dashboard

User dashboard shows all the details of order placed for a domain.

1. Website name
2. Languages
3. Industry
4. Count of URLs
5. Status of the Domain
6. Plan
7. Progress
8. Plan Validity
9. Page Views
10. Word Count

![dashboard](./images/DOTA_Web/OrderDashboardUpdate.png)

<!-- ## Plan details

User will see the plan details.
ex  Languages,Urls,Plan,Progress,word count,pages view.

![plan](./images/Dotaactiveplandetails.png) -->

## URLs

When the user clicks on the "URLs" tile, they will be directed to a list of URLs. The domain name is listed separately and hence the homepage would show up as just a / .

![wordcount](./images/DOTA_Web/UrlUpdate.png)

## Translation Progress  

Percentage of segments accepted by the user.

## Words

Word count present in the URL.

## Translation Type

Translation type of the URL - MT (Machine Translation), PT (Premium Translation) or HT (Human Translation).

### Machine Translation

Translation is to be done by the Machine Engine only.

### Human Translation

Translation is to be done by the customer himself.

### Premium Translation

Translation is to be done by utilsing the Devnagri's premium services.

<!-- ![translator](./images/a14.png) -->

## Created On

Ddate on which the URL was created in the Devnagri System.

## Published On

Date on which the URL was published for the first time in the Devnagri System.

## Published On History

Displays the history of publishing/unpublishing of the URL.

## Updated On

Displays the date when the URL was last updated with new content.

## Action

### Preview

User can view the translated URL in the selected language.

![preview](./images/DOTA_Web/Preview1.png)

### Proof Read/Translate

Click on proof read Tab.

![preview](./images/DOTA_Web/ProofRead.png)

Proof read shows  all the sentences of the URL along with the translation. User can edit the translations as well.

![proofread](./images/Toggledota.png)

### Sync Word Count

User can sync word count for each url. This will update the value of the word count for the URL.

![syncwordcount](./images/DOTA_Web/SyncWord.png)

## Published

Only published links are shown as translated.
<!--We don't translate unpublished URLs.-->

![ative](./images/DOTA_Web/PublishUrlUpdate.png)

## Search Tab

Users can utilize the search functionality to look up any specific URL. There is an option to perform exact search corresponding to the entered URL.

![search](./images/DOTA_Web/Search.png)

## Change URL Status

Users have the ability to publish or unpublish URLs using the options from the dropdown menu. Do note that selecting "publish in all languages" will publish the URL for all available languages in the order, while unpublishing can only be done on a language-by-language basis.

![urlupdate](./images/DOTA_Web/ChangeStatus.png)

## Add more language

User can add a new languages from the "Add Languages" option.

![morelanguage](./images/DOTA_Web/AddLanguage.png)

![morelanguage1](./images/DOTA_Web/AddLanguage2.png)

## Delete URL

We can delete the URLs by using the delete button.

![RR](./images/DOTA_Web/DeleteUrl.png)

## Change Block/Unblock URL Status

User can change Block/Unblock url status using the block button. This is used to block/unblock any URL for display and localisation purposes.

![Block](./images/DOTA_Web/ChangeBlock.png)

## Change language Dropdown

User can see the progress of the translated URLs in the selected language.

![PT](./images/DOTA_Web/LanguageSwitcherUpdate.png)

## Filter Dropdown

User can use the filter dropdown to filter on Active/Inactive/Blocked status, Published/Unpublished status, Translation type of the URLs.

![filter](./images/DOTA_Web/FilterUpdate.png)

## Add URLs

If system did not crawl any url due to some technical issue or user wants only some specifc URLs to be translated, the user can provide those URLs for translation.

![url_status](./images/DOTA_Web/URLStatus.png)

## Scan Your Website button

This option can be used to get a list  of all the possible URLs that are crawled by the Devnagri crawler.

<!-- ![sync](./images/a3.png) -->

## Translate button

Post selecting from the list of populated URLs, click on the translate button and URLs will be redirected to the DOTA dashboard.

<!-- ![tran](./images/translate.png) -->

## Don't have URLs

If the Devnagri crawler is unable to crawl some URLs, then use this to add the URLs to the dashboard manually.

<!-- ![Donthave](./images/clickurl.png) -->

## Manually Adding URL

Users can add URLs using either the "Paste URLs" or "Upload Files" feature to add list of URLs for crawling/translation.

![upload_files](./images/DOTA_Web/UploadFilesUpdate.png)

<!--## Paste URLs-->

<!--User can use this tab by pasting individually URLs. to crawl.-->

<!--![paste_urls](./images/DOTA_Web/PasteUpdate.png)-->

## Publish URLs

User can add all the URLs in the file and publish it directly.

![publish_urls](./images/DOTA_Web/PublishUrl.png)

## Publish

Type Live in the textbox present in the top right of the screen for enabling the translations on the localised URLs.

![publish_domain](./images/DOTA_Web/PublishDomain.png)

## Language Switcher

User can add the following script to display the language switcher on the source website.

![language_switcher](./images/DOTA_Web/LanguageSwitcher.png)

## Custom CSS

You can use Custom CSS to customize the positioning of Language Switcher Dropdown.<br>
Recommendation: Please use combination of (right and bottom) or (left and bottom) and keep the rest field as empty for better dropdown positioning.

![dropdown_position](./images/DOTA_Web/CustomCSS.png)

## Settings

Language dropdown on your website<br>

Recommendation : if you are using custom dropdown, please disable both the options.

![publish_settings](./images/DOTA_Web/SettingUpdate.png)

### Subdomain Redirect

If you are using Devnagri language dropdown, you need to toggle "ON" the setting. Selecting a language will redirect you to the localized versions of the website, providing assistance in accessing content tailored to your language preference. This option will work only after you have added the CNAME successfully.

Recommended only if you are not using your default language dropdown.

### Language Dropdown UI

Enabling this will help you populate an automatic language dropdown on your proxy website.

### Automatic Translations

If this is toggled to ON then any new URL that comes into the system automatically is marked ACTIVE (published) and localised.
If this is toggled to OFF then any new URL that comes into the system automatically is marked INACTIVE (unpublished) and NOT localised. 

The user is taken to the parent site when he tries to access the new URLs.

![automatic_translations](./images/DOTA_Web/AutomaticTranslations.png)

### Static Content Website

Enabling this setting is beneficial for websites with static content as it accelerates the process of content localization.

![Static_content](./images/DOTA_Web/StaticContent.png)

### Show Professional Translations ONLY

Setting this to ON would ensure only manually approved/accepted translations would be displayed on the website else the content would be in parent site language only.

![Professional_Translations](./images/DOTA_Web/ProfessionalTranslations.png)

## SSL Certificate CNAME

The SSL certificate gets generated automatically once the CNAME entry is done for proxy server mentioned corresponding for each language.

![SSL_certificate](./images/DOTA_Web/SSLCertificateUpdate.png)

## Subdomain

You can publish the subdomains for each language post making the CNAME entry with the Domain Name Service Provider using the highlighted toggle buttons.

![subdomain](./images/DOTA_Web/SubdomainUpdate.png)

<!--## Page Views-->

<!--Here, the user can see no. of visitors for each URL and language.-->

<!--![pageview](./images/DOTA_Web/PageViewsUpdate.png)-->

<!--### Total Views-->

<!--Total Views has the total no. of visitors on your localised website.-->

## Premium Translation Tab

User can see all the Premium Translation orders on this page.

![PTOrder](./images/DOTA_Web/PTOrder.png)

## Order for Premium Translation

Upon clicking 'Order High Quality Translation', you will be redirected to the page where you can select the URLs for which you want to create High Quality Translation. Click on 'Next' after selecting the URLs and you will transition on 'Create Order' page.

![PT_order_urls](./images/DOTA_Web/PremiumOrder.png)

## Create Order

This is where the user can create order by filling all the details (Project Name, Target Languages, Industry).

![Order](./images/DOTA_Web/PT1.png)

![Ordersucess](./images/DOTA_Web/PT2.png)

## PT orders will reflect on orders page and PT

The list of PT orders will be shown in orders page and Premium Translation section of DOTA dashboard.

![ordersummary](./images/DOTA_Web/PT3.png)

![ptorder](./images/DOTA_Web/PT4.png)

## Translate Button

User can visit the Translation Page of the Premium Translation Order by using this button and check the status of the segments.

![PTtranslate](./images/DOTA_Web/PT5.png)

## Translate Page

On this page user can see many options and toggle button.

Order type

Order Industry

Level of Politeness

Filters

Jump to segment

Language

URL being translated

Duplicate words

No. of words in the page

![toggle](./images/Toggledota.png)

## Toggle Controls

Upon clicking on toggle button the toggle will hide the sticky menu present on the bottom of the page.

![toggle](./images/toggle1.png)

![tg](./images/toggle2.png)

## Keyboard Shortcuts

Users can utilize the shortcuts available on this popup to streamline their workflow on the translation page..

![glossary](./images/Dotaglossary.png)

## Instructions

This popup displays the instructions provided during order creation.

![instruction](./images/Dotainstructions.png)

<!--![font](./images/Dotafont.png)-->

## Description on Translate Page

## Save Translation

The user or translator can save a specific segment after making changes by clicking the "Save Translation" button.

![save](./images/single.png)

## Add Comment

Users have the option to add comments to the translation of any segment.

![addcomment](./images/Addcomment.png)

## Revision History

The Revision History feature allows users to review the complete history of changes made to a particular segment.

![revision](./images/Revisionhistory.png)

## Accept Translation

Reviewers can accept the translations done by translators by clicking on this button.

![accept](./images/Accept.png)

## Reject Translation

Reviewers can reject the translations done by translators by clicking on this button.

![reject](./images/Reject.png)

## Accept/Reject All

Reviewers can accept/reject all segments at once from here.

![allinks](./images/second.png)

## Filter By

Users can filter from all the segments on basis of the status of the segments such as Translated, Untranslated, Accepted, Rejected, Commented, Duplicates etc.

![sort](./images/filter.png)

## Advance Filter

Users can filter from all the segments by using advance filter options such as Source Text, Translation Type, Sort By, With tags in the source segments.

![Advancesort](./images/DOTA_Web/AdvanceFilter1.png)

![Advancesort](./images/DOTA_Web/AdvanceFilter2.png)

## Find And Replace

Users can find segment text and replace (in the translations) using this option.

![find](./images/DOTA_Web/FindReplace1.png)

![replace](./images/DOTA_Web/FindReplace2.png)

## Jump to Segment

Users can input any segment number into the text box and click the ***Go*** button to navigate to that specific segment within the order.

![jumptosorting](./images/jump.png)

## Autofill MT

Selecting this option will automatically populate all untranslated segments with the chosen machine translation type.

![Autofill](./images/DOTA_Web/AutoFill.png)

## Preview

Using this option user can preview the webpage in translated language once translation is completed.

![Preview](./images/DOTA_Web/Preview.png)

## Stats

Users can check Translation Statistics using this option.

![StatsOption](./images/DOTA_Web/Stats1.png)

![Stats](./images/DOTA_Web/Stats2.png)

## Settings

### Caching

### Custom Purge

### URLs Purge

User can use this option to purge the cache of URLs. <br>
Limitation - 5 URLs at a time, one per line.

![purge_url](./images/DOTA_Web/CustomPurge.png)

### Folder/Prefix Purge

User can use this option to purge all the URLs of mentioned folder. <br>
Limitation - One folder at a time.

![purge_folder](./images/DOTA_Web/PurgeFolder.png)

### Domains

User can use this option to purge all cached files of the specified domain.

![purge_domain](./images/DOTA_Web/PurgeDomain.png)

### Purge Settings

User can use this option to purge the settings data so that changes done for the localised website gets reflected.

![purge_settings](./images/DOTA_Web/PurgeSettings.png)

### Bypass Cache

Please utilize this feature only if the website URL(s) remain the same before and after login.<br>
User needs to specify the cookie name that will enable the system to identify whether the page cache should be bypassed.

![bypass_cache](./images/DOTA_Web/Bypass.png)

### Query/Hash Params

If the site employs hash or query string parameters and you wish to determine whether each variant of URL(s) should be cached individually, please utilize the following section.

![query](./images/DOTA_Web/Query.png)

### Merge and Block

### Merge Folders

To merge msite or amp folders so that they do not show up repeatedly in the system. <br>
Please add comma seprated folder names. eg:- amp,msite etc.

![merge_folders](./images/DOTA_Web/MergeFolder.png)

### Blocked Keywords/URLs

For preventing blocked URLs to store in system user can utilise this option. <br>
Please delete the malformed URLs once after adding them in the block list.

![blocked_keywords](./images/DOTA_Web/BlockedKeywords.png)

### Exclude Block

This option lets you block specific sections on the website from being translated.<br>
User needs to mention class or div that he/she do not want to translate.

![exclude_block](./images/DOTA_Web/ExcludeBlock.png)

### SEO Crawling

When set to "ON," this feature removes special instructions from the localized website that prevent search engines like GoogleBOT from indexing it. This means that once the localized website is fully integrated, search engines and other bots can freely access and analyze its content.

![robots.txt](./images/DOTA_Web/Robots.png)

### Object Mapping

An image on the main site will be replaced by the localised image by providing the URLs of the images.

- English URL -  has the image url of the main site.
- Language - select the localised language.
- Localised URL - has the image url that is to be put on the localised site.

Note:- This feature can be used for images, docs, pptx etc. file formats.

![object_mapping](./images/object_mapping.png)

### Iframes

Specify iframe IDs that you want to localise. <br>
Limitation - Mentioned iframes should exist across the site.
Please add comma separated iframe ids, for eg:- iframeid1, iframeid2 etc.

![iframes](./images/DOTA_Web/Iframes.png)

### Hreflang Tags

Please add hreflang tags in your source code. These tags let Google know you have different versions of the same page and favor indexing of these pages. You can find these hreflang tags in the head tag of your website source code.<br>
Note that with this method, you don't need to edit your sitemap.

![hreflang_tags](./images/DOTA_Web/HreflangTagsUpdate.png)


<!-- ## Rule

 Some words which never translate or translate as given words.
![rule](./images/rule1.png)

## Never Translate

If User do not want to translate any word we should create a rule upon updating never translate button.
![acer](./images/acer.png)

## Always Translate  

If User wants to translate any particular word he can create a rule for always translate.

![never](./images/never.png) -->

## Purge Cache

### 1. Clear Cache of a Single URL

> **POST 'https://dns.devnagri.com/page-cache/clear-url'**

```json
{
    "english_url" : "https://fourtek.com/"
}
```

#### Request Parameters

The request requires input in the json data

| Key | Sample value | Description |
| -------------:|:-------------:|:-------------:|
| url | "https://fourtek.com/" | URL for purging |

### 2. Clear Cache of Complete Domain

> **POST 'https://dns.devnagri.com/page-cache/clear-domain'**

```json
{
    "domain" : "https://fourtek.com"
}
```

#### Request Parameters

The request requires input in the json data

| Key | Sample value | Description |
| -------------:|:-------------:|:-------------:|
| domain | "https://fourtek.com" | URL of domain for purging |
