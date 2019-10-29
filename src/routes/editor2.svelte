<script>
    import { stores } from "@sapper/app";
    const { page } = stores();

    //import dayStore from "../../../../stores/day-store";

    import { onMount } from "svelte";

    let editor;

    /*const postData = $dayStore.selectedDay.posts_days
            .filter(i => i.post.id === parseInt($page.params.id))
            .map(result => result.post.post_data.blocks);*/

    onMount(async () => {
        const {default: Header} = await import("@editorjs/header");
        const {default: SimpleImage} = await import("@editorjs/simple-image");
        const {default: List} = await import("@editorjs/list");
        const {default: Checklist} = await import("@editorjs/checklist");
        const {default: Quote} = await import("@editorjs/quote");
        const {default: Warning} = await import("@editorjs/warning");
        const {default: Marker} = await import("@editorjs/marker");
        const {default: CodeTool} = await import("@editorjs/code");
        const {default: Delimiter} = await import("@editorjs/delimiter");
        const {default: InlineCode} = await import("@editorjs/inline-code");
        const {default: LinkTool} = await import("@editorjs/link");
        const {default: Embed} = await import("@editorjs/embed");
        const {default: Table} = await import("@editorjs/table");

        const EditorJS = await import("@editorjs/editorjs");
        editor = new EditorJS.default({
            /**
             * Wrapper of Editor
             */
            holder: "editorjs",
            /**
             * Tools list
             */
            tools: {
                /**
                 * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
                 */
                header: {
                    class: Header,
                    inlineToolbar: ["link"],
                    config: {
                        placeholder: "Header"
                    },
                    shortcut: "CMD+SHIFT+H"
                },
                /**
                 * Or pass class directly without any configuration
                 */
                image: {
                    class: SimpleImage,
                    inlineToolbar: ["link"]
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                    shortcut: "CMD+SHIFT+L"
                },
                checklist: {
                    class: Checklist,
                    inlineToolbar: true
                },
                quote: {
                    class: Quote,
                    inlineToolbar: true,
                    config: {
                        quotePlaceholder: "Enter a quote",
                        captionPlaceholder: "Quote's author"
                    },
                    shortcut: "CMD+SHIFT+O"
                },
                warning: Warning,
                marker: {
                    class: Marker,
                    shortcut: "CMD+SHIFT+M"
                },
                code: {
                    class: CodeTool,
                    shortcut: "CMD+SHIFT+C"
                },
                delimiter: Delimiter,
                inlineCode: {
                    class: InlineCode,
                    shortcut: "CMD+SHIFT+C"
                },
                linkTool: LinkTool,
                embed: Embed,
                table: {
                    class: Table,
                    inlineToolbar: true,
                    shortcut: "CMD+ALT+T"
                }
            },
            /**
             * This Tool will be used as default
             */
            // initialBlock: 'paragraph',
            /**
             * Initial Editor data
             */
            /*data: {
                blocks: postData[0]
            },*/
            onReady: function() {
                // saveButton.click();
            },
            onChange: function() {
                console.log("something changed");
            }
        });
    });

    function savePost() {
        console.log("savePost:", editor);

        editor
                .save()
                .then(outputData => {
                    console.log("Article data: ", JSON.stringify(outputData, null, 4));
                })
                .catch(error => {
                    console.log("Saving failed: ", error);
                });
    }
</script>

<button id="saveButton" on:click={savePost}>save</button>
<div id="editorjs" />
