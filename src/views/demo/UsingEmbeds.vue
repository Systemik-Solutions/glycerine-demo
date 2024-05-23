<script setup>
import {computed, ref} from "vue";
import {useRouter} from "vue-router";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Card from "primevue/card";
import Message from "primevue/message";

const router = useRouter();

// Define the manifest URL.
const manifest = ref('https://w3id.org/iaw/data/publications/image-sets/01hm598yb6hc3s7btmqth813mg/manifest');

// Define the embed source.
const embedSource = ref('');

// Load the viewer embed.
function loadEmbed() {
    if (manifest.value) {
        const route = router.resolve({
            name: 'viewer',
            query: {
                'iiif-content': manifest.value,
            },
        });
        embedSource.value = new URL(route.href, window.location.origin).href;
    }
}

// Open the viewer.
function openViewer() {
    if (manifest.value) {
        router.push({
            name: 'viewer',
            query: {
                'iiif-content': manifest.value,
            },
        });
    }
}

loadEmbed();
</script>

<template>
    <h1>Using Embeds</h1>
    <p>
        Another way of using the Glycerine Viewer is to use the embedding method when it is not practical to build your
        application based on Vue, especially when integrating IIIF viewer into an existing application.
    </p>
    <p>
        The first part of this method is to create an dedicated IIIF viewing application based on Vue and Glycerine
        Viewer. The application can be as simple as a Vue application with a single page to render the Glycerine Viewer
        in the size of the viewport. The URL of the application can accept the URL of the IIIF manifest as a query
        parameter to achieve the dynamic loading of the manifest.
    </p>
    <p>
        Once the viewing application is ready, the next step is to embed page as an iframe into the target application.
        The target application can pass the URL of the IIIF manifest to the viewing application through the query
        parameter of the URL of the iframe.
    </p>
    <p>
        The following example uses a page created within this demo application (via Vue Router) to demonstrate the
        embedding method. The page <code>/viewer</code> accepts the URL of the IIIF manifest as the value of query
        parameter <code>iiif-content</code> and renders the Glycerine Viewer based on the manifest. Check the source file
        <code>/src/views/demo/FullscreenViewer.vue</code> to find out more details about the implementation of the
        viewer page.
    </p>
    <p>
        You can use the following form to paste in the URL of a IIIF manifest and view it as an embed or open it in the
        viewer page.
    </p>
    <Message :closable="false">
        Glycerine Viewer currently only supports <a href="https://iiif.io/api/presentation/3.0/">IIIF Presentation API
        3.0</a> manifests
    </Message>
    <Card class="mb-4 bg-cyan-50">
        <template #content>
            <div class="field grid">
                <label for="manifestUrl" class="col-fixed">IIIF Manifest</label>
                <div class="col">
                    <InputText class="w-full" id="manifestUrl" type="text" v-model="manifest" />
                </div>
                <div class="col-fixed">
                    <Button label="View as Embed" class="mr-2" @click="loadEmbed" />
                    <Button label="Open in Viewer" @click="openViewer" />
                </div>
            </div>
        </template>
    </Card>
    <iframe frameborder="0" allowfullscreen allow="fullscreen" style="width:100%;height:600px;" :src="embedSource"></iframe>
</template>

<style scoped>

</style>