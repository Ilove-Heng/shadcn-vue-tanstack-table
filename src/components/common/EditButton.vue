<template>
    <Dialog>
      <DialogTrigger as-child>
        <Button variant="outline"> Edit </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]" @escape-key-down.prevent>
        <DialogHeader>
          <DialogTitle>Edit Users</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="name" class="text-right"> First name </Label>
            <Input id="name" value="" class="col-span-3" autocomplete="false"/>
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" class="text-right"> Last name </Label>
            <Input id="username" value="" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" class="text-right"> Email </Label>
            <Input id="username" value="" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" class="text-right"> Title </Label>
            <Input id="username" value="" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" class="text-right"> Role </Label>
            <Input id="username" value="" class="col-span-3" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" class="text-right"> Created </Label>
            <Input id="username" value="" class="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button variant="outline"> Cancel </Button>
          </DialogClose>
          <Button type="submit"> Save changes </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DialogClose } from "radix-vue";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
</script>

<style scoped>

</style>