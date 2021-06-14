<script context="module" lang="ts">
    import { path } from 'svelte-pathfinder'

    import Link from '../components/Link.svelte'
    import { appName } from '../lib/constants'
</script>

<script lang="ts">
    export let title = ''
</script>

<svelte:head>
    <title>{`${title ? title + ' | ' : ''}${appName}`}</title>
</svelte:head>

<main
    class="py-4 mx-auto flex flex-col items-center justify-between bg-transparent text-white h-full w-full"
>
    <slot />
    <footer
        class="flex flex-col items-center justify-center w-full h-24 font-thin"
    >
        <a
            href="https://github.com/Greenheart/svelte-encrypted-spa"
            class="pb-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            >Created with Svelte Encrypted SPA (Soon to be released)</a
        >

        {#if $path.toString() !== '/'}
            <Link href="/">Home</Link>
        {/if}
    </footer>
</main>
